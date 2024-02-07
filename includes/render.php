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

	if ( $block_styles ) {
		$block_styles = \BlockStylesManager\Data\get_block_styles( array( 'slug' => $block_styles ) );
		if ( count( $block_styles ) > 0 ) {
			foreach ( $block_styles as $block_style ) {
				foreach ( $block_style['block_types'] as $block_type ) {
					register_block_style(
						$block_type,
						array(
							'name'         => 'block-styles-manager-' . $block_style['slug'],
							'label'        => $block_style['slug'],
							'inline_style' => $block_style['content'],
						),
					);
				}
			}
		}
	}

	return $block_content;
}
add_action( 'render_block', __NAMESPACE__ . '\register_block_styles_on_render', 10, 2 );
