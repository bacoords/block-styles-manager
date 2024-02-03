import { styles } from "@wordpress/icons";
import { createHigherOrderComponent } from "@wordpress/compose";
import { useState, useEffect } from "@wordpress/element";

import { PanelBody, Modal, Button, PanelRow } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";

import { MultiSelectControl } from "@codeamp/block-components";
import ViewBlockStyles from "./ViewBlockStyles";
import EditBlockStyle from "./EditBlockStyle";
import "./filters.js";

import { store } from "./store";

import "./style.scss";

/**
 * Mount the main Block Styles Manager Plugin Component
 * @returns {Component} BlockStylesManagerPlugin
 */
const BlockStylesManagerPlugin = (props) => {
	const { attributes, setAttributes, name } = props;
	const [modalView, setModalView] = useState("");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);
	const [blockStyles, setBlockStyles] = useState([]);
	const [allBlockStyles, setAllBlockStyles] = useState([]);

	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	const launchEditForm = (id) => {
		let blockStyle = records.find(
			(blockStyle) => blockStyle.id === parseInt(id),
		);
		setCurrentBlockStyle({
			...blockStyle,
			title: blockStyle.title,
			content: blockStyle.content,
		});
		setModalView("edit");
	};

	const saveStylesInAttribute = (slugs) => {
		setAttributes({ wpdevBlockStyles: slugs });
	};

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: "selector {\n  opacity: 0.5;\n}",
		meta: {
			block_types: ["core/group"],
		},
	};
	const filterSelector = (css, record) => {
		return css.replace(/selector/g, `.${record.slug}`);
	};

	// Need to move this out so it loads on the first render.
	useEffect(() => {
		if (hasResolved && records.length > 0) {
			setAllBlockStyles(records);

			setBlockStyles(
				records.filter((record) => record.meta.block_types.includes(name)),
			);
			// Add records CSS to iframe
			let css = "";
			records.forEach((record) => {
				css += filterSelector(record.content, record);
			});
			const style = document.createElement("style");
			style.innerHTML = css;
			style.id = "wpdev-block-styles";
			let destination =
				window.parent.document.querySelector('iframe[name="editor-canvas"]')
					?.document.head ?? document.head;

			destination.querySelector("#wpdev-block-styles")?.remove();

			destination.appendChild(style);
		}
	}, [records, hasResolved]);

	const AddNewButton = () => {
		if ("list" !== modalView) {
			return null;
		}
		return (
			<Button
				onClick={() => {
					console.log("clicked");
					setModalView("new");
				}}
				variant="primary"
			>
				{__("Add New Block Style")}
			</Button>
		);
	};

	return (
		<InspectorControls group="styles">
			<PanelBody
				title={__("Block Styles Manager")}
				initialOpen={true}
				className="wpdev-block-styles-manager--panel"
			>
				<PanelRow>
					<MultiSelectControl
						label={__("Add Styles")}
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
					<Button
						icon={styles}
						onClick={() => setModalView("list")}
						aria-expanded={"" !== modalView}
						aria-haspopup="dialog"
						variant="secondary"
					>
						{__("Manage Block Styles")}
					</Button>
				</PanelRow>
			</PanelBody>
			{"" !== modalView && (
				<Modal
					title={__("Block Styles Manager")}
					size="large"
					headerActions={<AddNewButton />}
					isFullScreen={true}
					overlayClassName="wpdev-block-styles-manager"
					onRequestClose={() => {
						setModalView("");
					}}
				>
					{modalView === "list" && (
						<ViewBlockStyles
							launchEditForm={launchEditForm}
							records={allBlockStyles}
							hasResolved={hasResolved}
						/>
					)}
					{modalView === "edit" && (
						<>
							<h2>{__("Edit Block Style")}</h2>
							<EditBlockStyle
								attributes={currentBlockStyle}
								closeForm={() => {
									setModalView("list");
								}}
							/>
						</>
					)}
					{modalView === "new" && (
						<>
							<h2>{__("New Block Style")}</h2>
							<EditBlockStyle
								attributes={newBlockStyle}
								closeForm={() => {
									setModalView("list");
								}}
							/>
						</>
					)}
				</Modal>
			)}
		</InspectorControls>
	);
};

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
addFilter(
	"editor.BlockEdit",
	"wpdev/block-styles-manager-add-styles-manager",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			return (
				<>
					<BlockEdit {...props} />
					{props.isSelected && <BlockStylesManagerPlugin {...props} />}
				</>
			);
		};
	}),
);
