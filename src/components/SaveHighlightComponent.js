import $ from "jquery";

function SaveHighlightComponent(props) {
	const id = props.data_id.value;

	const rawData = $(`#${id} .code-snippet-data pre`).text();
	const data = JSON.parse(rawData)

	return (
		<div>
			<pre>
				<code className={`${data.language} hljs`} id={`code-${id}`}>
					<p>{data.code}</p>
				</code>
			</pre>
		</div>
	);
}

export default SaveHighlightComponent;
