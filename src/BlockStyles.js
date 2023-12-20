import { useState, useEffect } from "@wordpress/element";
import { useEntityRecords } from "@wordpress/core-data";
import { Button } from "@wordpress/components";
import EditBlockStyle from "./EditBlockStyle";

function BlockStyles() {
	const [blockStyles, setBlockStyles] = useState([]);
	const [currentView, setCurrentView] = useState("list");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: ".is-style-new-block-style { background-color: red; }",
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

	return (
		<div>
			{currentView === "list" && (
				<>
					<ul>
						{blockStyles.map((blockStyle) => (
							<li key={blockStyle.id}>
								<Button onClick={launchEditForm} value={blockStyle.id}>
									{blockStyle.title.rendered}
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
