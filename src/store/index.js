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

	*saveBlockStyle(block_style) {
		console.log("saveBlockStyle", block_style);
		yield actions.updateInAPI(
			"/block-styles-manager/v1/block-styles/" + block_style.id,
			block_style,
		);
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

	updateInAPI(path, data) {
		return {
			type: "UPDATE_IN_API",
			path,
			data,
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
				block_styles: [
					...state.block_styles.filter(
						(style) => style.id !== action.block_style.id,
					),
					action.block_style,
				],
			};
		default:
			return state;
	}
};

const controls = {
	FETCH_FROM_API(action) {
		console.log("FETCH_FROM_API", action);
		return apiFetch({ path: action.path });
	},

	UPDATE_IN_API(action) {
		console.log("UPDATE_IN_API", action);
		return apiFetch({
			path: action.path,
			method: "POST",
			data: action.data,
		});
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
		console.log("saveBlockStyle", action);
		const blockStyle = yield actions.fetchFromAPI({
			path: "/block-styles-manager/v1/block-styles/" + action.block_style.id,
			method: "POST",
			data: action.block_style,
		});
		return actions.save(blockStyle);
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
