<?php
add_action('wp_enqueue_scripts', 'hljs_scripts');

function hljs_scripts()
{
	global $post;
	$post_tags = get_the_tags($post->ID);

	if (is_single() && $post_tags != null && has_code_tag($post_tags)) {
		wp_enqueue_style('highlightjs-css', '//cdn.jsdelivr.net/npm/highlightjs-themes@1.0.0/monokai.min.css');
		wp_enqueue_script('highlightjs', '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/highlight.min.js', [], 'latest', true);
	} else return;
}

function has_code_tag($post_tags)
{
	$has_tag = false;

	foreach ($post_tags as $key => $tag) {
		$tag->name == 'code' ? $has_tag = true : $has_tag = false;
	}

	return $has_tag;
}
