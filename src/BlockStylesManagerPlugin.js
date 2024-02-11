import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
	Flex,
	FlexItem,
	Modal,
	Button,
	PanelRow,
	PanelBody,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { store } from "./store";

import ViewBlockStyles from "./ViewBlockStyles";
import EditBlockStyle from "./EditBlockStyle";

const BlockStylesManagerPlugin = () => {
	const [modalView, setModalView] = useState("list");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);

	const [allBlockStyles, setAllBlockStyles] = useState([]);

	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: "selector {\n  opacity: 0.5;\n}",
		block_types: ["core/group"],
	};

	const launchEditForm = (id) => {
		let blockStyle = allBlockStyles.find((blockStyle) => blockStyle.id === id);
		if (!blockStyle) {
			return;
		}
		setCurrentBlockStyle({
			...blockStyle,
			title: blockStyle.title,
			content: blockStyle.content.replaceAll(`.${blockStyle.slug}`, "selector"),
		});
		setModalView("edit");
	};

	useEffect(() => {
		if (hasResolved && records.length > 0) {
			setAllBlockStyles(records);

			// Add records CSS to iframe
			let css = "";
			records.forEach((record) => {
				css += record.content + "\n";
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

	return (
		<>
			<PluginSidebarMoreMenuItem target="wpdev-block-styles-manager">
				{__("Block Styles Manager")}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="wpdev-block-styles-manager"
				title={__("Block Styles Manager")}
			>
				<PanelBody>
					<PanelRow>
						{"list" === modalView && (
							<>
								<Flex gap="3" direction="column">
									<Button
										onClick={() => {
											console.log("clicked");
											setModalView("new");
										}}
										variant="primary"
									>
										{__("Add New Block Style")}
									</Button>
									<ViewBlockStyles launchEditForm={launchEditForm} />
								</Flex>
							</>
						)}

						{modalView === "edit" && (
							<>
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
								<EditBlockStyle
									attributes={newBlockStyle}
									closeForm={() => {
										setModalView("list");
									}}
								/>
							</>
						)}
					</PanelRow>
				</PanelBody>
			</PluginSidebar>
		</>
	);
};

export default BlockStylesManagerPlugin;
