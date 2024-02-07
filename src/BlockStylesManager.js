import { styles } from "@wordpress/icons";
import { useState, useEffect } from "@wordpress/element";

import { Flex, FlexItem, Button, PanelRow } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";

import { MultiSelectControl } from "@codeamp/block-components";

import { store } from "./store";

import "./style.scss";

/**
 * Mount the main Block Styles Manager Plugin Component
 * @returns {Component} BlockStylesManager
 */
const BlockStylesManager = (props) => {
	const { attributes, setAttributes, name } = props;

	const [blockStyles, setBlockStyles] = useState([]);

	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	const { closePublishSidebar, openGeneralSidebar } =
		useDispatch("core/edit-post");

	const saveStylesInAttribute = (slugs) => {
		setAttributes({ wpdevBlockStyles: slugs });
	};

	/**
	 * Closes the publish sidebar and opens the Yoast sidebar.
	 *
	 * @returns {void}
	 */
	const onClick = () => {
		closePublishSidebar();
		openGeneralSidebar("wpdev-block-styles-manager/wpdev-block-styles-manager");
	};

	// Need to move this out so it loads on the first render.
	useEffect(() => {
		if (hasResolved && records.length > 0) {
			setBlockStyles(
				records.filter((record) => record.block_types.includes(name)),
			);
		}
	}, [records, hasResolved]);

	return (
		<InspectorControls group="advanced">
			<PanelRow>
				<Flex align="flex-start">
					<FlexItem>
						<MultiSelectControl
							label={__("Add Block Styles")}
							value={attributes.wpdevBlockStyles}
							options={blockStyles.map((blockStyle) => ({
								label: blockStyle.title,
								value: blockStyle.slug,
							}))}
							multiple={true}
							onChange={saveStylesInAttribute}
						/>
					</FlexItem>
					<FlexItem>
						<Button
							icon={styles}
							onClick={onClick}
							aria-haspopup="dialog"
							variant="secondary"
							describedBy={__("Manage Block Styles")}
						></Button>
					</FlexItem>
				</Flex>
			</PanelRow>
		</InspectorControls>
	);
};

export default BlockStylesManager;
