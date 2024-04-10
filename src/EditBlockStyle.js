import { TextControl, Button, Flex } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";
import { useState } from "@wordpress/element";
import { MultiSelectControl } from "@codeamp/block-components";
import { chevronLeft } from "@wordpress/icons";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

import { store } from "./store";

function EditBlockStyle({ attributes, closeForm }) {
	const [blockStyle, setBlockStyle] = useState(attributes);

	const [blockTypes, setBlockTypes] = useState(wp.blocks.getBlockTypes());

	const { saveBlockStyle } = useDispatch(store);

	const saveBlockStyleHandler = async () => {
		const args = {
			title: blockStyle.title,
			content: blockStyle.content,
			slug: blockStyle.slug,
			block_types: blockStyle.block_types ?? [],
		};

		if (blockStyle.id) {
			args.id = blockStyle.id;
		}
		const savedRecord = saveBlockStyle(args).then((res) => {
			console.log("savedRecord", res);
		});

		if (savedRecord) {
			closeForm();
		}
	};

	return (
		<Flex gap="3" direction="column">
			<Button onClick={closeForm} icon={chevronLeft}>
				{__("All Styles")}
			</Button>
			<TextControl
				label={__("Name")}
				value={blockStyle.title ?? ""}
				onChange={(title) =>
					setBlockStyle({
						...blockStyle,
						title,
					})
				}
			/>
			<TextControl
				label={__("Class")}
				value={blockStyle.slug ?? ""}
				readOnly={blockStyle.id !== 0}
				help={__("This is the class name that will be added to the block.")}
				onChange={(slug) =>
					setBlockStyle({
						...blockStyle,
						slug,
					})
				}
			/>
			<MultiSelectControl
				label={__("Supported Block Types")}
				value={blockStyle.block_types ?? []}
				options={blockTypes.map((blockType) => ({
					label: blockType.title,
					value: blockType.name,
				}))}
				multiple={true}
				onChange={(block_types) =>
					setBlockStyle({
						...blockStyle,
						block_types: block_types,
					})
				}
			/>

			<CodeMirror
				// label={__("CSS")}
				value={blockStyle.content ?? ""}
				// spellCheck={false}
				// rows={10}
				onChange={(content) =>
					setBlockStyle({
						...blockStyle,
						content,
					})
				}
				extensions={[css()]}
			/>
			<Button variant="primary" onClick={saveBlockStyleHandler}>
				{blockStyle.id !== 0 ? __("Save Changes") : __("Save Block Style")}
			</Button>
		</Flex>
	);
}

export default EditBlockStyle;
