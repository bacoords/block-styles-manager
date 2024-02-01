<?php
/**
 * Handles Eneuques for block styles.
 *
 * @package BlockStylesManager
 */

namespace BlockStylesManager\Enqueue;

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function enqueue_editor_modifications() {
	$asset_file = include BLOCK_STYLES_MANAGER_PLUGIN_DIR . 'build/index.asset.php';
	wp_enqueue_script(
		'custom-block-styles-editor-modifications',
		BLOCK_STYLES_MANAGER_PLUGIN_URL . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'custom-block-styles-editor-modifications',
		BLOCK_STYLES_MANAGER_PLUGIN_URL . 'build/style-index.css',
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_modifications' );
