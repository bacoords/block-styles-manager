import { styles, plus } from "@wordpress/icons";
import { useState, useEffect } from "@wordpress/element";

import { Button, PanelBody, PanelRow, Flex } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";

import { MultiSelectControl } from "@codeamp/block-components";
import NewStyleModal from "./NewStyleModal";

import { store } from "./store";

import "./style.scss";

/**
 * Mount the main Block Styles Manager Plugin Component
 * @returns {Component} BlockStylesManager
 */
const BlockStylesManager = (props) => {
	const { attributes, setAttributes, name } = props;

	const [blockStyles, setBlockStyles] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	const { openGeneralSidebar } = useDispatch("core/edit-post");
	const { setCurrentlyEditing } = useDispatch(store);

	const saveStylesInAttribute = (slugs) => {
		setAttributes({ wpdevBlockStyles: slugs });
	};

	/**
	 * Closes the publish sidebar and opens the Yoast sidebar.
	 *
	 * @returns {void}
	 */
	const jumpToSidebar = () => {
		openGeneralSidebar("wpdev-block-styles-manager/wpdev-block-styles-manager");
	};

	const loadNewModal = () => {
		setShowModal(true);
	};

	const editBlockStyle = (blockStyle) => {
		setCurrentlyEditing(blockStyle);
		jumpToSidebar();
	};

	const onSuccess = (record, blockStyle) => {
		setShowModal(false);
		console.log("record", record, blockStyle);
		setAttributes({
			wpdevBlockStyles: [...attributes.wpdevBlockStyles, blockStyle.slug],
		});
		editBlockStyle(blockStyle);
	};

	// Need to move this out so it loads on the first render.
	useEffect(() => {
		console.log("records", records);
		if (hasResolved && records.length > 0) {
			setBlockStyles(
				records.filter((record) => record.block_types.includes(name)),
			);
		}
	}, [records, hasResolved]);

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody title={__("Block Styles")}>
					<PanelRow>
						<Flex justify="flex-start" direction="column">
							{attributes.wpdevBlockStyles.map((slug) => {
								const blockStyle = blockStyles.find(
									(blockStyle) => blockStyle.slug === slug,
								);
								if (!blockStyle) {
									return null;
								}
								return (
									<Button
										key={slug}
										variant="secondary"
										onClick={() => {
											editBlockStyle(blockStyle);
										}}
									>
										{blockStyle.title}
									</Button>
								);
							})}
						</Flex>
					</PanelRow>
					<PanelRow>
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
					</PanelRow>
					<PanelRow>
						<Flex gap="2">
							<Button icon={styles} onClick={jumpToSidebar} variant="secondary">
								{__("Manage Styles")}
							</Button>
							<Button
								icon={plus}
								onClick={loadNewModal}
								aria-haspopup="dialog"
								variant="secondary"
							>
								{__("Create")}
							</Button>
						</Flex>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{showModal && (
				<NewStyleModal
					name={name}
					onSuccess={onSuccess}
					onRequestClose={() => {
						setShowModal(false);
					}}
				/>
			)}
		</>
	);
};

export default BlockStylesManager;
