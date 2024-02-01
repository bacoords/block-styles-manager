<?php
/**
 * Handles REST API requests for block styles.
 *
 * @package BlockStylesManager
 */

namespace BlockStylesManager\RestAPI;

function register_rest_api_endpoints() {
	register_rest_route(
		'block-styles-manager/v1',
		'/block-styles',
		array(
			'methods'             => 'GET',
			'callback'            => __NAMESPACE__ . '\get_block_styles',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_rest_route(
		'block-styles-manager/v1',
		'/block-styles/(?P<id>\d+)',
		array(
			'methods'             => 'GET',
			'callback'            => __NAMESPACE__ . '\get_block_style',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_rest_route(
		'block-styles-manager/v1',
		'/block-styles/(?P<id>\d+)',
		array(
			'methods'             => 'POST',
			'callback'            => __NAMESPACE__ . '\update_block_style',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_rest_route(
		'block-styles-manager/v1',
		'/block-styles/(?P<id>\d+)',
		array(
			'methods'             => 'DELETE',
			'callback'            => __NAMESPACE__ . '\delete_block_style',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}


function get_block_styles() {
	$block_styles = new \WP_Query(
		array(
			'post_type'      => 'wpdev_block_style',
			'posts_per_page' => -1,
		)
	);

	$block_styles_data = array();

	if ( $block_styles->have_posts() ) {
		while ( $block_styles->have_posts() ) {
			$block_styles->the_post();

			$block_styles_data[] = array(
				'id'   => get_the_ID(),
				'name' => get_the_title(),
			);
		}
	}

	return $block_styles_data;
}
