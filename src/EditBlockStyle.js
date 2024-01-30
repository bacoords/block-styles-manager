import {
	TextControl,
	TextareaControl,
	Button,
	Flex,
	FlexItem,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";
import { useState } from "@wordpress/element";
import { store as coreDataStore } from "@wordpress/core-data";
import { transformStyles } from "@wordpress/block-editor";
import { registerBlockStyle } from "@wordpress/blocks";
import { decodeEntities } from "@wordpress/html-entities";
import { MultiSelectControl } from "@codeamp/block-components";

function EditBlockStyle({ attributes, closeForm }) {
	const [blockStyle, setBlockStyle] = useState(attributes);

	const [blockTypes, setBlockTypes] = useState(wp.blocks.getBlockTypes());

	const { saveEntityRecord } = useDispatch(coreDataStore);
	const saveBlockStyle = async () => {
		const args = {
			title: blockStyle.title,
			content: blockStyle.content,
			slug: blockStyle.slug.replace("is-style-", ""),
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
					name: blockStyle.slug.replace("is-style-", ""),
					label: decodeEntities(blockStyle.title),
				});
			});

			console.log(transformed);
			closeForm();
		}
	};

	return (
		<Flex gap="3" direction="column">
			<Flex>
				<FlexItem>
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
				</FlexItem>
				<FlexItem>
					<TextControl
						label={__("Class")}
						value={blockStyle.slug ?? ""}
						help={__(
							"This is the class name that will be added to the block, and will always be prefixed with .is-style-",
						)}
						onChange={(slug) =>
							setBlockStyle({
								...blockStyle,
								slug,
							})
						}
					/>
				</FlexItem>
			</Flex>
			<MultiSelectControl
				label={__("Supported Block Types")}
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
			<Flex>
				<FlexItem>
					<Button variant="primary" onClick={saveBlockStyle}>
						{__("Save Block Style")}
					</Button>
				</FlexItem>
				<FlexItem>
					<Button isDestructive onClick={closeForm}>
						{__("Cancel")}
					</Button>
				</FlexItem>
			</Flex>
		</Flex>
	);
}

export default EditBlockStyle;
