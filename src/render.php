<?php
$id = $attributes['id'];
$title = $attributes['title'];
$language = $attributes['language'];
$code = $attributes['code'];

?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="code-snippet-container" id="<?php echo esc_html($id) ?>" title="<?php echo esc_html($title) ?>">
		<div class="code-snippet-data">
			<pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
		</div>
		<div class="render-content"></div>
	</div>
</div>
