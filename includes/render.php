<?php
/**
 * Handles rendering of block styles.
 *
 * @package BlockStylesManager
 */

namespace BlockStylesManager\Render;

/**
 * Register our block styles.
 *
 * @param string $block_content The block content.
 * @param array  $block The block.
 * @return string
 */
function register_block_styles_on_render( $block_content, $block ) {

	if ( ! isset( $block['attrs']['wpdevBlockStyles'] ) ) {
		return $block_content;
	}

	$block_styles = $block['attrs']['wpdevBlockStyles'];

	$block_styles = new \WP_Query(
		array(
			'post_type'      => 'wpdev_block_style',
			'posts_per_page' => -1,
			'post_name__in'  => $block_styles,
		)
	);

	if ( $block_styles->have_posts() ) {

		while ( $block_styles->have_posts() ) {
			$block_styles->the_post();

			$block_types = get_post_meta( get_the_ID(), 'block_types', true );

			if ( ! $block_types ) {
				continue;
			}

			foreach ( $block_types as $block_type ) {

				register_block_style(
					$block_type,
					array(
						'label'        => get_the_title(),
						'name'         => get_post_field( 'post_name', get_the_ID() ),
						'inline_style' => str_replace(
							'selector',
							'.' . get_post_field( 'post_name', get_the_ID() ),
							get_the_content(),
						),
					),
				);
			}
		}
		wp_reset_postdata();
	}

	return $block_content;
}
add_action( 'render_block', __NAMESPACE__ . '\register_block_styles_on_render', 10, 2 );
