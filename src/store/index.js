import apiFetch from "@wordpress/api-fetch";
import { createReduxStore, register } from "@wordpress/data";

const DEFAULT_STATE = {
	block_styles: [],
	currentlyEditing: null,
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
		if (block_style.id === undefined || block_style.id === 0) {
			block_style = yield actions.updateInAPI(
				"/block-styles-manager/v1/block-styles",
				block_style,
			);
		} else {
			yield actions.updateInAPI(
				"/block-styles-manager/v1/block-styles/" + block_style.id,
				block_style,
			);
		}
		return {
			type: "SAVE_BLOCK_STYLE",
			block_style,
		};
	},

	setCurrentlyEditing(block_style) {
		return {
			type: "SET_CURRENTLY_EDITING",
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
	getCurrentlyEditing(state) {
		return state.currentlyEditing;
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
			console.log("SAVE_BLOCK_STYLE", action);
			return {
				...state,
				block_styles: [
					...state.block_styles.filter(
						(style) => style.id !== action.block_style.id,
					),
					action.block_style,
				],
			};
		case "GET_CURRENTLY_EDITING":
			return {
				...state,
				currentlyEditing: action.block_style,
			};
		case "SET_CURRENTLY_EDITING":
			return {
				...state,
				currentlyEditing: action.block_style,
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

	setCurrentlyEditing(action) {
		return actions.setCurrentlyEditing(action.block_style);
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
