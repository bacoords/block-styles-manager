import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";

/**
 * Add additional attributes to the block settings.
 */
const additionalAttributes = {
	wpdevBlockStyles: {
		type: "array",
		default: [],
	},
};

addFilter(
	"blocks.registerBlockType",
	"wpdev/block-styles-manager-add-attributes",
	function (settings, name) {
		return {
			...settings,
			attributes: {
				...settings.attributes,
				...additionalAttributes,
			},
		};
	},
);

/**
 * Add the classname via the edit component to the block.
 *
 */
const addCustomBlockClassToEdit = createHigherOrderComponent(
	(BlockListBlock) => {
		return (props) => {
			const { attributes } = props;

			const { wpdevBlockStyles } = attributes;
			if (wpdevBlockStyles?.length === 0) {
				return <BlockListBlock {...props} />;
			}

			const customClass = wpdevBlockStyles ? wpdevBlockStyles.join(" ") : "";

			return <BlockListBlock {...props} className={customClass} />;
		};
	},
	"addCustomBlockClassToEdit",
);

addFilter(
	"editor.BlockListBlock",
	"wpdev/block-styles-manager-custom-edit",
	addCustomBlockClassToEdit,
);

/**
 * Add the classname via the save component to the block.
 *
 */
const addCustomBlockClassToSave = (props, block, attributes) => {
	const { wpdevBlockStyles } = attributes;

	if (wpdevBlockStyles?.length === 0) {
		return { ...props };
	}

	const customClass = wpdevBlockStyles ? wpdevBlockStyles.join(" ") : "";

	return { ...props, className: props.className + " " + customClass };
};

addFilter(
	"blocks.getSaveContent.extraProps",
	"wpdev/block-styles-manager-custom-save",
	addCustomBlockClassToSave,
);
