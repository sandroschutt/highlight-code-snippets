<?php
$id = $attributes['id'];
$title = $attributes['title'];
$language = $attributes['language'];
$code = $attributes['code'];
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="code-snippet-container" id="<? echo esc_html($id) ?>" title="<? echo esc_html($title) ?>">
		<input id="att-id" type="hidden" value="<? echo esc_html($id) ?>" />
		<input id="att-language" type="hidden" value="<? echo esc_html($language) ?>" />
		<input id="att-code" type="hidden" value="<? echo esc_html($code) ?>" />

		<div class="render-content"></div>
	</div>
</div>
