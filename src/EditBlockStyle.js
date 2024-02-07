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
import { MultiSelectControl } from "@codeamp/block-components";

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

		console.log(args);

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
						readOnly={blockStyle.id !== 0}
						help={__("This is the class name that will be added to the block.")}
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
					<Button variant="primary" onClick={saveBlockStyleHandler}>
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
