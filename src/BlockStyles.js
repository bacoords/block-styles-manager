import { useState, useEffect } from "@wordpress/element";
import { useEntityRecords } from "@wordpress/core-data";
import { Button } from "@wordpress/components";
import EditBlockStyle from "./EditBlockStyle";
import { decodeEntities } from "@wordpress/html-entities";

function BlockStyles() {
	const [blockStyles, setBlockStyles] = useState([]);
	const [currentView, setCurrentView] = useState("list");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: "selector { background-color: red; }",
		meta: {
			block_type: "core/group",
		},
	};

	const { records, hasResolved } = useEntityRecords(
		"postType",
		"wpdev_block_style",
		{ per_page: -1 },
	);

	const launchEditForm = (event) => {
		let blockStyle = blockStyles.find(
			(blockStyle) => blockStyle.id === parseInt(event.target.value),
		);
		setCurrentBlockStyle({
			...blockStyle,
			title: blockStyle.title.raw,
			content: blockStyle.content.raw,
		});
		setCurrentView("edit");
	};

	useEffect(() => {
		if (hasResolved) {
			setBlockStyles(records);
			console.log(records);
		}
	}, [hasResolved]);

	const filterSelector = (css, record) => {
		return css.replace(/selector/g, `.is-style-${record.slug}`);
	};

	useEffect(() => {
		if (records) {
			// Add records CSS to iframe
			let css = "";
			records.forEach((record) => {
				css += filterSelector(record.content.raw, record);
			});
			const style = document.createElement("style");
			style.innerHTML = css;
			style.id = "wpdev-block-styles";
			let destination =
				window.parent.document.querySelector('iframe[name="editor-canvas"]')
					?.document.head ?? document.head;

			destination.appendChild(style);
		}
	}, [records]);

	return (
		<div>
			{currentView === "list" && (
				<>
					<ul>
						{blockStyles.map((blockStyle) => (
							<li key={blockStyle.id}>
								<Button onClick={launchEditForm} value={blockStyle.id}>
									{decodeEntities(blockStyle.title.rendered)}
								</Button>
								<code>{blockStyle.meta.block_type}</code>
							</li>
						))}
					</ul>
					<Button onClick={() => setCurrentView("new")} variant="primary">
						Add New Block Style
					</Button>
				</>
			)}

			{currentView === "edit" && (
				<>
					<h2>Edit Block Style</h2>
					<EditBlockStyle
						attributes={currentBlockStyle}
						closeForm={() => {
							setCurrentView("list");
						}}
					/>
					<Button onClick={() => setCurrentView("list")} isDestructive>
						Cancel
					</Button>
				</>
			)}

			{currentView === "new" && (
				<>
					<h2>New Block Style</h2>
					<EditBlockStyle
						attributes={newBlockStyle}
						closeForm={() => {
							setCurrentView("list");
						}}
					/>
					<Button onClick={() => setCurrentView("list")} isDestructive>
						Cancel
					</Button>
				</>
			)}
		</div>
	);
}

export default BlockStyles;
