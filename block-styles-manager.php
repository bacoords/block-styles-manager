<?php
/**
 * Plugin Name:       Block Styles Manager
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            bacoords
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/bacoords/block-styles-manager
 * Text Domain:       block-styles-manager
 *
 * @package           BlockStylesManager
 */

namespace BlockStylesManager;

/**
 * Enqueue block editor only JavaScript and CSS.
 */
function enqueue_editor_modifications() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script(
		'custom-block-styles-editor-modifications',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'custom-block-styles-editor-modifications',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_modifications' );


/**
 * Register our block styles post type.
 * Note that we're not going to actually use this post type, this is just for prototyping.
 *
 * @return void
 */
function register_block_styles_post_type() {
	$args = array(
		'public'              => false,
		'label'               => 'Block Styles',
		'supports'            => array( 'title', 'editor', 'custom-fields' ),
		'has_archive'         => false,
		'rewrite'             => false,
		'exclude_from_search' => true,
		'capability_type'     => 'post',
		'show_ui'             => false,
		'show_in_admin_bar'   => false,
		'show_in_rest'        => true,
	);
	register_post_type( 'wpdev_block_style', $args );

	register_meta(
		'post',
		'block_types',
		array(
			'object_subtype' => 'wpdev_block_style',
			'show_in_rest'   => array(
				'schema' => array(
					'type'  => 'array',
					'items' => array(
						'type' => 'string',
					),
				),
			),
			'type'           => 'array',
			'single'         => true,
			'default'        => array(),
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register_block_styles_post_type' );



/**
 * Register our block styles.
 *
 * @return void
 */
function register_block_styles() {

	$block_styles = new \WP_Query(
		array(
			'post_type'      => 'wpdev_block_style',
			'posts_per_page' => -1,
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

				$selector = get_post_field( 'post_name', get_the_ID() );
				if ( strpos( $selector, 'is-style-' ) === false ) {
					$selector = 'is-style-' . $selector;
				}

				register_block_style(
					$block_type,
					array(
						'label'        => get_the_title(),
						'name'         => get_post_field( 'post_name', get_the_ID() ),
						'inline_style' => str_replace(
							'selector',
							'.' . $selector,
							get_the_content(),
						),
					),
				);
			}
		}
		wp_reset_postdata();
	}
}
add_action( 'init', __NAMESPACE__ . '\register_block_styles' );
