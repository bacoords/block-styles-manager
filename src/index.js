import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/edit-post";
import { styles } from "@wordpress/icons";

import { PanelBody, PanelRow } from "@wordpress/components";
import BlockStyles from "./BlockStyles";
import apiFetch from "@wordpress/api-fetch";

import { __ } from "@wordpress/i18n";

function Edit() {
	return (
		<PluginSidebar
			name="wp-dev-custom-block-style"
			title={__("Custom Block Styles")}
			icon={styles}
		>
			<PanelBody title={__("Custom Block Styles")}>
				<PanelRow>
					<BlockStyles />
				</PanelRow>
			</PanelBody>
		</PluginSidebar>
	);
}

registerPlugin("wp-dev-custom-block-style", { render: Edit });

// @todo Also make this launchable from inside a block.

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
