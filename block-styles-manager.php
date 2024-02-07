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

define( 'BLOCK_STYLES_MANAGER_VERSION', '0.1.0' );
define( 'BLOCK_STYLES_MANAGER_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLOCK_STYLES_MANAGER_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once BLOCK_STYLES_MANAGER_PLUGIN_DIR . 'includes/block-styles-data.php';
require_once BLOCK_STYLES_MANAGER_PLUGIN_DIR . 'includes/enqueue.php';
require_once BLOCK_STYLES_MANAGER_PLUGIN_DIR . 'includes/render.php';
require_once BLOCK_STYLES_MANAGER_PLUGIN_DIR . 'includes/rest-api.php';
