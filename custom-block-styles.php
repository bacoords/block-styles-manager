<?php
/**
 * Plugin Name:       Custom Block Styles
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/bacoords/custom-block-styles
 * Text Domain:       custom-block-styles
 *
 * @package           wpdev
 */

namespace wpdev;

/**
 * Enqueue block editor only JavaScript.
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
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_modifications' );


/**
 * Register our block styles post type.
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

	// if ( is_admin() ) {
	// return;
	// }

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
			do_action( 'qm/debug', $block_types );
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
							'.is-style-' . get_post_field( 'post_name', get_the_ID() ),
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
