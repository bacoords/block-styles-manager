import {
	TextControl,
	TextareaControl,
	SelectControl,
	Button,
	Flex,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";
import { useState } from "@wordpress/element";
import { store as coreDataStore } from "@wordpress/core-data";
import { transformStyles } from "@wordpress/block-editor";
import { registerBlockStyle } from "@wordpress/blocks";

function EditBlockStyle({ attributes, closeForm }) {
	const [blockStyle, setBlockStyle] = useState(attributes);

	const [blockTypes, setBlockTypes] = useState(wp.blocks.getBlockTypes());

	const { saveEntityRecord } = useDispatch(coreDataStore);
	const saveBlockStyle = async () => {
		const args = {
			title: blockStyle.title,
			content: blockStyle.content,
			slug: blockStyle.slug,
			status: "publish",
			meta: {
				block_type: blockStyle.meta.block_type,
			},
		};

		if (blockStyle.id) {
			args.id = blockStyle.id;
		}
		const savedRecord = await saveEntityRecord(
			"postType",
			"wpdev_block_style",
			args,
		);
		if (savedRecord) {
			const [transformed] = transformStyles(
				[{ css: blockStyle.content }],
				".editor-styles-wrapper",
			);

			registerBlockStyle(blockStyle.meta.block_type, {
				name: blockStyle.slug,
				label: blockStyle.title,
			});

			console.log(transformed);
			closeForm();
		}
	};

	return (
		<Flex gap="3" direction="column">
			<TextControl
				label={__("Label")}
				value={blockStyle.title ?? ""}
				onChange={(title) =>
					setBlockStyle({
						...blockStyle,
						title,
					})
				}
			/>
			<TextControl
				label={__("Class Name")}
				value={blockStyle.slug ?? ""}
				help={__(
					"This is the class name that will be added to the block, and will be prefixed with is-style-",
				)}
				onChange={(slug) =>
					setBlockStyle({
						...blockStyle,
						slug,
					})
				}
			/>
			<SelectControl
				label={__("Block Type")}
				value={blockStyle.meta?.block_type ?? ""}
				options={blockTypes.map((blockType) => ({
					label: blockType.title,
					value: blockType.name,
				}))}
				onChange={(block_type) =>
					setBlockStyle({
						...blockStyle,
						meta: {
							...blockStyle.meta,
							block_type,
						},
					})
				}
			/>
			{/* @todo Make the a real code editor with tokens for the class name */}
			{/* @todo Add variables, themejson stuff, etc */}
			<TextareaControl
				label={__("CSS")}
				value={blockStyle.content ?? ""}
				spellCheck={false}
				onChange={(content) =>
					setBlockStyle({
						...blockStyle,
						content,
					})
				}
			/>
			<Button variant="primary" onClick={saveBlockStyle}>
				{__("Save Block Style")}
			</Button>
		</Flex>
	);
}

export default EditBlockStyle;
