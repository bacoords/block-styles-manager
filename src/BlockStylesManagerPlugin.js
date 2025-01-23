import { PluginSidebarMoreMenuItem } from "@wordpress/edit-site";
import { PluginSidebar } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { Flex, Button, PanelRow, PanelBody } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { store } from "./store";
import { brush } from "@wordpress/icons";

import ViewBlockStyles from "./ViewBlockStyles";
import EditBlockStyle from "./EditBlockStyle";

const BlockStylesManagerPlugin = () => {
	const [modalView, setModalView] = useState("list");

	const [allBlockStyles, setAllBlockStyles] = useState([]);

	const { records, hasResolved, currentlyEditing } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
			currentlyEditing: select(store).getCurrentlyEditing(),
		};
	}, []);

	const { setCurrentlyEditing } = useDispatch(store);

	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: ".your-class-here {\n\n}",
		block_types: ["core/group"],
	};

	const launchEditForm = (slug) => {
		let blockStyle = allBlockStyles.find(
			(blockStyle) => blockStyle.slug === slug,
		);
		if (!blockStyle) {
			return;
		}
		setCurrentlyEditing({
			...blockStyle,
			content: blockStyle.content,
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
					?.contentDocument.head ?? document.head;

			destination.querySelector("#wpdev-block-styles")?.remove();

			destination.appendChild(style);
		}
	}, [records, hasResolved]);

	useEffect(() => {
		console.log("currentlyEditing", currentlyEditing);
		if (currentlyEditing) {
			launchEditForm(currentlyEditing);
			setModalView("edit");
		}
	}, [currentlyEditing, hasResolved]);

	return (
		<>
			<PluginSidebarMoreMenuItem
				target="wpdev-block-styles-manager"
				icon={brush}
			>
				{__("Block Styles Manager")}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="wpdev-block-styles-manager"
				title={__("Block Styles Manager")}
				icon={brush}
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
									attributes={currentlyEditing}
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
