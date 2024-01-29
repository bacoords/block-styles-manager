import { registerPlugin } from "@wordpress/plugins";
import { styles } from "@wordpress/icons";
import { useState, useEffect } from "@wordpress/element";
import { useEntityRecords } from "@wordpress/core-data";
import { MenuItem, Modal, Button } from "@wordpress/components";
import { BlockSettingsMenuControls } from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import { __ } from "@wordpress/i18n";

import ViewBlockStyles from "./ViewBlockStyles";
import EditBlockStyle from "./EditBlockStyle";

import "./style.scss";

// Block Styles Manager Plugin Component
const BlockStylesManagerPlugin = () => {
	const [modalView, setModalView] = useState("");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);
	const [blockStyles, setBlockStyles] = useState([]);

	const { records, hasResolved } = useEntityRecords(
		"postType",
		"wpdev_block_style",
		{ per_page: -1 },
	);

	const launchEditForm = (id) => {
		let blockStyle = blockStyles.find(
			(blockStyle) => blockStyle.id === parseInt(id),
		);
		setCurrentBlockStyle({
			...blockStyle,
			title: blockStyle.title.raw,
			content: blockStyle.content.raw,
		});
		setModalView("edit");
	};

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "is-style-new-block-style",
		content: "selector {\n  opacity: 0.5;\n}",
		meta: {
			block_types: ["core/group"],
		},
	};
	const filterSelector = (css, record) => {
		return css.replace(/selector/g, `.is-style-${record.slug}`);
	};

	useEffect(() => {
		if (records) {
			setBlockStyles(records);
			// Add records CSS to iframe
			let css = "";
			records.forEach((record) => {
				css += filterSelector(record.content.raw, record);
			});
			const style = document.createElement("style");
			style.innerHTML = css;
			style.id = "wpdev-block-styles";
			let destination =
				window.parent.document.querySelector('iframe[name="editor-canvas"]')
					?.document.head ?? document.head;

			destination.appendChild(style);
		}
	}, [records]);

	const AddNewButton = () => {
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
		<BlockSettingsMenuControls>
			<MenuItem
				icon={styles}
				onClick={() => setModalView("list")}
				aria-expanded={"" !== modalView}
				aria-haspopup="dialog"
			>
				{__("Block Styles")}
			</MenuItem>
			{"" !== modalView && (
				<Modal
					title={__("Block Styles Manager")}
					size="large"
					headerActions={<AddNewButton />}
					isFullScreen={true}
					overlayClassName="wpdev-block-style-manager"
					onRequestClose={() => {
						setModalView("");
					}}
				>
					{modalView === "list" && (
						<ViewBlockStyles
							launchEditForm={launchEditForm}
							records={records}
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
		</BlockSettingsMenuControls>
	);
};

// Register the plugin.
registerPlugin("block-styles-manager", {
	render: BlockStylesManagerPlugin,
});

// On initial load, register all block styles.
apiFetch({
	path: "/wp/v2/wpdev_block_style",
}).then((response) => {
	response.forEach((blockStyle) => {
		console.log(blockStyle);
		wp.blocks.registerBlockStyle(blockStyle.meta.block_type, {
			name: blockStyle.slug,
			label: blockStyle.title.rendered,
			inlineStyle: blockStyle.content.raw,
		});
	});
});
