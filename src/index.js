import { registerPlugin } from "@wordpress/plugins";
import { styles } from "@wordpress/icons";
import { useState } from "@wordpress/element";
import { MenuItem, Modal, Button } from "@wordpress/components";
import { BlockSettingsMenuControls } from "@wordpress/block-editor";
import BlockStyles from "./BlockStyles";
import apiFetch from "@wordpress/api-fetch";

import { __ } from "@wordpress/i18n";

import "./style.scss";

const PluginBlockSettingsMenuGroupTest = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [currentView, setCurrentView] = useState("list");

	const AddNewButton = () => {
		return (
			<Button
				onClick={() => {
					console.log("clicked");
					setCurrentView("new");
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
				onClick={() => setModalOpen(true)}
				aria-expanded={modalOpen}
				aria-haspopup="dialog"
			>
				{__("Block Styles")}
			</MenuItem>
			{modalOpen && (
				<Modal
					title={__("Block Style Manager")}
					size="large"
					headerActions={<AddNewButton />}
					isFullScreen={true}
					overlayClassName="wpdev-block-style-manager"
					onRequestClose={() => {
						setCurrentView("list");
						setModalOpen(false);
					}}
				>
					<BlockStyles
						currentView={currentView}
						setCurrentView={setCurrentView}
					/>
				</Modal>
			)}
		</BlockSettingsMenuControls>
	);
};

registerPlugin("block-settings-menu-group-test", {
	render: PluginBlockSettingsMenuGroupTest,
});

// @todo Also make this context aware of the block type?

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
