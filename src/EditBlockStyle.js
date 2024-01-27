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
import { decodeEntities } from "@wordpress/html-entities";

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
				block_types: blockStyle.meta.block_types ?? [],
			},
		};

		console.log(args);

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
			blockStyle.meta.block_types.forEach((blockType) => {
				registerBlockStyle(blockType, {
					name: blockStyle.slug,
					label: decodeEntities(blockStyle.title),
				});
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
				value={blockStyle.meta?.block_types ?? []}
				options={blockTypes.map((blockType) => ({
					label: blockType.title,
					value: blockType.name,
				}))}
				multiple={true}
				onChange={(block_types) =>
					setBlockStyle({
						...blockStyle,
						meta: {
							...blockStyle.meta,
							block_types: block_types,
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
