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
		'/block-styles',
		array(
			'methods'             => 'POST',
			'callback'            => __NAMESPACE__ . '\create_block_style',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_rest_route(
		'block-styles-manager/v1',
		'/block-styles/(?P<id>[a-zA-Z0-9\-]+)',
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
		'/block-styles/(?P<id>[a-zA-Z0-9\-]+)',
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
		'/block-styles/(?P<id>[a-zA-Z0-9\-]+)',
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
	$params = $request->get_params();

	$block_styles = \BlockStylesManager\Data\get_block_styles();

	return $block_styles;
}


/**
 * Get a block style.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function get_block_style( $request ) {

	$block_style = \BlockStylesManager\Data\get_block_style( $request['id'] );

	if ( ! $block_style ) {
		return new \WP_Error( 'not_found', 'Block style not found', array( 'status' => 404 ) );
	}

	return $block_style;
}


/**
 * Create a block style.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function create_block_style( $request ) {

	$block_style_data = json_decode( $request->get_body(), true );

	$block_style_id = \BlockStylesManager\Data\create_block_style( $block_style_data );

	return new \WP_REST_Response( get_block_style( array( 'id' => $block_style_id ) ), 201 );
}


/**
 * Update a block style.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response
 **/
function update_block_style( $request ) {

	$block_style = \BlockStylesManager\Data\get_block_style( $request['id'] );

	if ( ! $block_style ) {
		return new \WP_Error( 'not_found', 'Block style not found', array( 'status' => 404 ) );
	}

	$block_style_data = json_decode( $request->get_body(), true );

	$block_style_id = \BlockStylesManager\Data\update_block_style( $request['id'], $block_style_data );

	return new \WP_REST_Response( get_block_style( array( 'id' => $block_style_id ) ), 200 );
}
