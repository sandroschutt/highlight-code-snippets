import {
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	Button,
	SelectControl,
} from "@wordpress/components";
import { useState } from "react";
import $ from "jquery";
import uniqid from "uniqid";

function EditHlightComponent(props) {
	let data = props.attributes;
	let attributes = data.attributes;

	const [id, setId] = useState(attributes.id);
	const [title, setTitle] = useState(attributes.title);
	const [language, setLanguage] = useState(attributes.language);
	const [code, setCode] = useState(attributes.code);

	if (id == "none") setId(uniqid());

	const options = $(`#${id}.hl-container select option`);

	$.map(options, (option) => {
		if (option.value == language) {
			option.setAttribute("selected", "selected");
		}
	});

	function saveBlockData() {
		try {
			const newtitle = document.querySelector(
				`#${id}.hl-container .title input`,
			).value;
			const newlanguage = document.querySelector(
				`#${id}.hl-container select`,
			).value;
			const newcode = document.querySelector(
				`#${id}.hl-container textarea`,
			).value;

			if (newtitle != "code.html") {
				data.setAttributes({ id: id });
				data.setAttributes({ title: title });
				setTitle(title);
				data.setAttributes({ language: newlanguage });
				setLanguage(newlanguage);
				data.setAttributes({ code: newcode });
				setCode(newcode);

				alert("Your code snippet was saved!");
			} else {
				alert("Your snippet does not have a title. Fix that and try again.");
			}
		} catch (error) {
			console.log(error);
		}
	}

	(function () {
		let locked = false;

		wp.data.subscribe(function () {
			const results = wp.data
				.select("core/block-editor")
				.getBlocks()
				.filter(function (block) {
					return (
						block.name == "create-block/highlight-code-snippets" &&
						block.attributes.title == "code.html"
					);
				});

			if (results.length && locked == false) {
				locked = true;
				wp.data.dispatch("core/editor").lockPostSaving("noanswer");
			}

			if (!results.length && locked) {
				locked = false;
				wp.data.dispatch("core/editor").unlockPostSaving("noanswer");
			}
		});
	})();

	return (
		<Flex className="hl-container" id={id}>
			<FlexBlock>
				<FlexItem>
					<TextControl
						label="Title:"
						className={"title"}
						value={title}
						onChange={(value) => setTitle(value)}
					/>
				</FlexItem>

				<FlexItem>
					<SelectControl
						label="Language"
						options={[
							{ label: "HTML", value: "html" },
							{ label: "CSS", value: "css%" },
							{ label: "Javascript", value: "javascript" },
							{ label: "PHP", value: "php" },
							{ label: "jQuery", value: "jquery" },
							{ label: "React.js", value: "react" },
							{ label: "SASS", value: "sass" },
							{ label: "SQL", value: "sql" },
						]}
					/>
				</FlexItem>

				<FlexItem className={"code-content"}>
					<label for="code-content">Code: </label>
					<textarea placeholder={"console.log('oi')"}>{code}</textarea>
				</FlexItem>

				<div>
					<Button
						isPrimary
						id="save-code-snippet"
						onClick={() => {
							saveBlockData();
						}}
					>
						Save
					</Button>
					<p class="tag-alert">
						You need to insert the tag <strong>code</strong> in your post for
						making the code snippets show in the frontend
					</p>
				</div>
			</FlexBlock>
		</Flex>
	);
}

export default EditHlightComponent;
