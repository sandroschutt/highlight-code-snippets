import $ from "jquery";

function SaveHighlightComponent(props) {
	const id = props.data_id.value;
	const title = props.data_title.value;

	const language = $(`#${id} #att-language`).val();
	const code = $(`#${id} #att-code`).val();
	// console.log(language, code)

	return (
		<div>
			<pre>
				<code className={`${language} hljs`}>
					<p>{code}</p>
				</code>
			</pre>
		</div>
	);
}

export default SaveHighlightComponent;
