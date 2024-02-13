import { Modal, TextControl, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";
import { store } from "./store";

function NewStyleModal({ name, onSuccess, onRequestClose }) {
	const [blockStyle, setBlockStyle] = useState({
		title: "",
		slug: "",
		content: "selector {\n\n}",
		block_types: [name],
	});

	const [isSlugValid, setIsSlugValid] = useState(false);

	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	const { saveBlockStyle } = useDispatch(store);

	const saveBlockStyleHandler = async () => {
		const savedRecord = saveBlockStyle(blockStyle).then((res) => {
			console.log("savedRecord", res);
			onSuccess(savedRecord, blockStyle);
		});
	};

	useEffect(() => {
		if (!records.length || !blockStyle.slug) {
			setIsSlugValid(false);
			return;
		}

		const isSlugValid = !records.find(
			(record) => record.slug === blockStyle.slug,
		);

		setIsSlugValid(isSlugValid);
	}, [blockStyle.slug]);

	return (
		<Modal title={__("Add New Block Style")} onRequestClose={onRequestClose}>
			<TextControl
				label={__("Name")}
				value={blockStyle.title}
				onChange={(title) =>
					setBlockStyle({
						...blockStyle,
						title,
					})
				}
			/>
			<TextControl
				label={__("Class")}
				value={blockStyle.slug}
				help={__("This is the class name that will be added to the block.")}
				onChange={(slug) =>
					setBlockStyle({
						...blockStyle,
						slug,
					})
				}
			/>
			<Button
				variant="primary"
				onClick={saveBlockStyleHandler}
				disabled={!isSlugValid}
			>
				{__("Save Block Style")}
			</Button>
		</Modal>
	);
}

export default NewStyleModal;
