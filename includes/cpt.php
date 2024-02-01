<?php
/**
 * Handles the old CPT approach for block styles.
 *
 * @package BlockStylesManager
 */

namespace BlockStylesManager\CPT;

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
