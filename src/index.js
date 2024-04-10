import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import BlockStylesManagerPlugin from "./BlockStylesManagerPlugin";
import BlockStylesManager from "./BlockStylesManager";

import { registerPlugin } from "@wordpress/plugins";
import { brush } from "@wordpress/icons";

import "./filters.js";

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
					{props.isSelected && <BlockStylesManager {...props} />}
				</>
			);
		};
	}),
);

registerPlugin("wpdev-bsm", {
	icon: brush,
	render: BlockStylesManagerPlugin,
});
