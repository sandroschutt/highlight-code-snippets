/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
import $ from "jquery";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SaveHighlightComponent from "./components/SaveHighlightComponent.js";

$(document).ready(() => {
	try {
		const container = $(".code-snippet-container");

		$.map(container, (snippet) => {
			let renderTarget = snippet.childNodes[7];
			ReactDOM.render(
				<SaveHighlightComponent data_id={snippet.attributes.id} data_title={snippet.attributes.title} />,
				renderTarget,
			);
			let title = document.createElement('p');
			title.innerText = `// ${snippet.attributes.title.value}`;
			renderTarget.prepend(title)
		});

		hljs.highlightAll();
	} catch (error) {
		console.log(error)
	}
});