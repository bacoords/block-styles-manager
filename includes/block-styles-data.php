<?php
/**
 * Handles data for the block styles
 */

namespace BlockStylesManager\Data;

/**
 * Get all block styles
 *
 * @return array
 */
function get_block_styles( $args = array() ) {

	$args = wp_parse_args(
		$args,
		array(
			'slug' => '',
		)
	);

	// Filter the block styles array.
	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	if ( ! file_exists( $styles_dir ) ) {
		return array();
	}

	if ( isset( $args['name'] ) && $args['name'] ) {
		$block_styles = array();
		$names        = is_array( $args['name'] ) ? $args['name'] : explode( ',', $args['name'] );
		foreach ( $names as $name ) {
			$block_style = get_block_style( $name );
			if ( $block_style ) {
				$block_styles[] = $block_style;
			}
		}
		return $block_styles;
	}

	// Cache for the entire block styles collection.
	$block_styles = wp_cache_get( 'block_styles', 'wpdev_block_styles' );

	if ( ! $block_styles ) {
		foreach ( glob( $styles_dir . '/*.css' ) as $file ) {

			if ( isset( $args['block_type'] ) && $args['block_type'] ) {
				$block_style = create_block_style_array( $file );

				if ( ! array_intersect( $args['block_type'], $block_style['block_types'] ) ) {
					continue;
				}
			}
			$block_styles[] = create_block_style_array( $file );

		}
		wp_cache_set( 'block_styles', $block_styles, 'wpdev_block_styles' );
	}
	return $block_styles;
}


/**
 * Get a block style
 *
 * @param int $id The block style ID.
 * @return array
 */
function get_block_style( $id ) {
	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	$file = $styles_dir . '/' . $id . '.css';

	if ( file_exists( $file ) ) {
		return create_block_style_array( $file );
	}

	return array();
}

/**
 * Create the block style array
 *
 * @param string $file The file path.
 * @return array
 */
function create_block_style_array( $file ) {
	$file_data = get_file_data(
		$file,
		array(
			'title'       => 'Name',
			'slug'        => 'Class',
			'block_types' => 'Block',
		)
	);

	$file_data['block_types'] = explode( ',', $file_data['block_types'] );

	$file_data['id'] = sanitize_title( $file_data['slug'] );

	$file_data['content'] = file_get_contents( $file );

	$file_data['content'] = preg_replace( '/\/\*.*?\*\//s', '', $file_data['content'] );

	$file_data['content'] = trim( $file_data['content'] );

	$file_data['path'] = $file;

	return apply_filters( 'block-styles-manager/style-array', $file_data );
}


/**
 * Save the block style to the file system
 *
 * @param array $data The block style data.
 * @return string The block style ID.
 */
function create_block_style( $data ) {

	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	// Confirm slug doesn't exist.
	$block_styles = get_block_styles( array( 'name' => $data['slug'] ) );
	$count        = count( $block_styles );
	$int          = 1;
	$old_slug     = $data['slug'];
	while ( $count > 0 ) {
		$data['slug'] = $old_slug . '-' . $int;
		$block_styles = get_block_styles( array( 'name' => $data['slug'] ) );
		$count        = count( $block_styles );
		++$int;
	}

	if ( $old_slug !== $data['slug'] ) {
		$data['content'] = str_replace( '.' . $old_slug, '.' . $data['slug'], $data['content'] );
	}

	$data['id'] = sanitize_title( $data['slug'] );

	$filename = $styles_dir . '/' . $data['id'] . '.css';

	$css = '/*' . PHP_EOL;

	$css .= 'Name: ' . $data['title'] . PHP_EOL;
	$css .= 'Class: ' . $data['slug'] . PHP_EOL;
	$css .= 'Block: ' . implode( ',', $data['block_types'] ) . PHP_EOL;

	$css .= '*/' . PHP_EOL;

	$css .= $data['content'];

	file_put_contents( $filename, $css );

	if ( wp_cache_supports( 'flush_group' ) ) {
		wp_cache_flush_group( 'wpdev_block_styles' );
	} else {
		wp_cache_delete( 'block_styles', 'wpdev_block_styles' );
	}

	return $data['id'];
}


/**
 * Update the block style in the file system
 *
 * @param int   $id   The block style ID.
 * @param array $data The block style data.
 * @return int The block style ID.
 */
function update_block_style( $id, $data ) {

	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	$filename = $styles_dir . '/' . $id . '.css';

	$css = '/*' . PHP_EOL;

	$css .= 'Name: ' . sanitize_text_field( $data['title'] ) . PHP_EOL;
	$css .= 'Class: ' . sanitize_text_field( $data['slug'] ) . PHP_EOL;
	$css .= 'Id: ' . sanitize_text_field( $data['id'] ) . PHP_EOL;
	$css .= 'Block: ' . implode( ',', $data['block_types'] ) . PHP_EOL;

	$css .= '*/' . PHP_EOL;

	$css .= sanitize_textarea_field( $data['content'] );

	file_put_contents( $filename, $css );

	return $id;
}
