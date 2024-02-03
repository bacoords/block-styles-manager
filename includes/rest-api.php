<?php
/**
 * Handles REST API requests for block styles.
 *
 * @package BlockStylesManager
 */

namespace BlockStylesManager\RestAPI;

/**
 * Registers REST API endpoints.
 *
 * @return void
 **/
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
add_action( 'rest_api_init', __NAMESPACE__ . '\register_rest_api_endpoints' );


/**
 * Get a block styles.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function get_block_styles( $request ) {
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
				'id'      => get_the_ID(),
				'title'   => get_the_title(),
				'content' => get_the_content(),
				'slug'    => get_post_field( 'post_name', get_post() ),
				'meta'    => array(
					'block_types' => get_post_meta( get_the_ID(), 'block_types', true ) ?? array(),
				),
			);
		}
	}

	return $block_styles_data;
}


/**
 * Get a block style.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function get_block_style( $request ) {
	$block_style = get_post( $request['id'] );

	if ( ! $block_style ) {
		return new \WP_Error( 'not_found', 'Block style not found', array( 'status' => 404 ) );
	}

	$block_style_data = array(
		'id'      => $block_style->ID,
		'title'   => $block_style->post_title,
		'content' => $block_style->post_content,
		'slug'    => $block_style->post_name,
		'meta'    => array(
			'block_types' => get_post_meta( $block_style->ID, 'block_types', true ) ?? array(),
		),
	);

	return $block_style_data;
}



/**
 * Update a block style.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function update_block_style( $request ) {
	return new \WP_Error( 'not_implemented', 'Not implemented', array( 'status' => 501 ) );
	// $block_style = get_post( $request['id'] );

	// if ( ! $block_style ) {
	// return new \WP_Error( 'not_found', 'Block style not found', array( 'status' => 404 ) );
	// }

	// $block_style->to_array();

	// $block_style_data = json_decode( $request->get_body(), true );

	// $block_style['post_title']   = $block_style_data['title'];
	// $block_style['post_content'] = $block_style_data['content'];
	// $block_style['post_name']    = $block_style_data['slug'];

	// wp_update_post( $block_style );

	// update_post_meta( $block_style->ID, 'block_types', $block_style_data['meta']['block_types'] );

	// return $block_style;
}
