<?php
/**
 * Plugin Name:       Highlight Code Snippets
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       highlight-code-snippets
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
include __DIR__ . "/includes/php/hljs_scripts.php";

function highlight_code_snippets_highlight_code_snippets_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'highlight_code_snippets_highlight_code_snippets_block_init' );
