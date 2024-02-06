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
			'block_type' => array(),
			'name'       => '',
		)
	);

	$block_styles = array();

	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	if ( ! file_exists( $styles_dir ) ) {
		return array();
	}

	if ( isset( $args['name'] ) && $args['name'] ) {
		$names = is_array( $args['name'] ) ? $args['name'] : explode( ',', $args['name'] );
		foreach ( $names as $name ) {
			$block_style = get_block_style( $name );
			if ( $block_style ) {
				$block_styles[] = $block_style;
			}
		}
		return $block_styles;
	}

	foreach ( glob( $styles_dir . '/*.css' ) as $file ) {

		if ( isset( $args['block_type'] ) && $args['block_type'] ) {
			$block_style = create_block_style_array( $file );

			if ( ! array_intersect( $args['block_type'], $block_style['block_types'] ) ) {
				continue;
			}
		}
		$block_styles[] = create_block_style_array( $file );

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
 * @return bool True if the file was saved.
 */
function create_block_style( $data ) {

	$styles_dir = apply_filters( 'block-styles-manager/location', WP_CONTENT_DIR . '/block-styles' );

	if ( ! isset( $data['id'] ) || ! $data['id'] ) {
		$data['id'] = sanitize_title( $data['slug'] );
	}

	$filename = $styles_dir . '/' . $data['id'] . '.css';

	$css = '/*' . PHP_EOL;

	$css .= 'Name: ' . $data['title'] . PHP_EOL;
	$css .= 'Class: ' . $data['slug'] . PHP_EOL;
	$css .= 'Block: ' . implode( ',', $data['block_types'] ) . PHP_EOL;

	$css .= '*/' . PHP_EOL;

	$css .= $data['content'];

	file_put_contents( $filename, $css );

	return $data['id'];
}
