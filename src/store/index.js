import apiFetch from "@wordpress/api-fetch";
import { createReduxStore, register } from "@wordpress/data";

const DEFAULT_STATE = {
	block_styles: [],
};

const STORE_NAME = "wpdev/block-styles";

const actions = {
	hydrate(block_styles) {
		return {
			type: "GET_BLOCK_STYLES",
			block_styles,
		};
	},

	saveBlockStyle(block_style) {
		return {
			type: "SAVE_BLOCK_STYLE",
			block_style,
		};
	},
	fetchFromAPI(path) {
		return {
			type: "FETCH_FROM_API",
			path,
		};
	},
};

const selectors = {
	getBlockStyles(state) {
		return state.block_styles;
	},
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case "GET_BLOCK_STYLES":
			return {
				...state,
				block_styles: action.block_styles,
			};
		case "SAVE_BLOCK_STYLE":
			return {
				...state,
				block_styles: {
					...state.block_styles,
					[action.block_style.id]: action.block_style,
				},
			};
		default:
			return state;
	}
};

const controls = {
	FETCH_FROM_API(action) {
		return apiFetch({ path: action.path });
	},
};

const resolvers = {
	*getBlockStyles() {
		const blockStyles = yield actions.fetchFromAPI(
			"/block-styles-manager/v1/block-styles",
		);
		return actions.hydrate(blockStyles);
	},

	*saveBlockStyle(action) {
		const blockStyle = yield actions.fetchFromAPI({
			path: "/block-styles-manager/v1/block-styles",
			method: "POST",
			data: action.block_style,
		});
		return actions.saveBlockStyle(blockStyle);
	},
};

const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
	controls,
	resolvers,
});

register(store);

export { store };
