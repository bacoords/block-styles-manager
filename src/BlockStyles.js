import { useState, useEffect } from "@wordpress/element";
import { useEntityRecords } from "@wordpress/core-data";
import { Button, Modal } from "@wordpress/components";
import EditBlockStyle from "./EditBlockStyle";
import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";
import { DataViews } from "@wordpress/dataviews";
import { Icon, edit } from "@wordpress/icons";

function BlockStyles({ currentView, setCurrentView }) {
	const [blockStyles, setBlockStyles] = useState([]);
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "is-style-new-block-style",
		content: "selector {\n  opacity: 0.5;\n}",
		meta: {
			block_types: ["core/group"],
		},
	};

	const { records, hasResolved } = useEntityRecords(
		"postType",
		"wpdev_block_style",
		{ per_page: -1 },
	);

	const launchEditForm = (id) => {
		let blockStyle = blockStyles.find(
			(blockStyle) => blockStyle.id === parseInt(id),
		);
		setCurrentBlockStyle({
			...blockStyle,
			title: blockStyle.title.raw,
			content: blockStyle.content.raw,
		});
		setCurrentView("edit");
	};

	const filterSelector = (css, record) => {
		return css.replace(/selector/g, `.is-style-${record.slug}`);
	};

	useEffect(() => {
		if (hasResolved) {
			setBlockStyles(records);
		}
	}, [hasResolved]);

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
		<>
			{"list" === currentView && hasResolved && records.length > 0 && (
				<DataViews
					data={records}
					getItemId={(item) => {
						return item.id;
					}}
					onChangeView={function noRefCheck() {}}
					fields={[
						{
							enableHiding: false,
							getValue: function noRefCheck() {},
							render: ({ item }) => {
								return (
									<h4>
										<Button
											variant="link"
											onClick={() => launchEditForm(item.id)}
										>
											{decodeEntities(item.title?.rendered) || __("(no title)")}
										</Button>
									</h4>
								);
							},
							header: "Title",
							id: "title",
							maxWidth: 400,
						},
						{
							enableHiding: false,
							getValue: function noRefCheck() {},
							render: ({ item }) => {
								return <code>{`.is-style-${item.slug}`}</code>;
							},
							header: "Class",
							id: "slug",
							maxWidth: 400,
						},
						{
							enableHiding: false,
							getValue: function noRefCheck() {},
							render: ({ item }) => {
								return item.meta.block_types?.map((blockType, i) => (
									<code key={i}>{blockType}</code>
								));
							},
							header: "Block Types",
							id: "groups",
							maxWidth: 400,
						},
					]}
					supportedLayouts={["table"]}
					view={{
						type: "table",
						perPage: 15,
						page: 1,
						layout: {},
						filters: [],
						hiddenFields: [],
					}}
					actions={
						[
							// {
							// 	callback: () => {
							// 		// launchEditForm();
							// 	},
							// 	id: "delete",
							// 	label: __("Delete"),
							// 	icon: <Icon icon={edit} />,
							// },
						]
					}
					paginationInfo={{
						totalPages: 1,
						totalItems: records.length,
					}}
				/>
			)}
			{currentView === "edit" && (
				<>
					<h2>{__("Edit Block Style")}</h2>
					<EditBlockStyle
						attributes={currentBlockStyle}
						closeForm={() => {
							setCurrentView("list");
						}}
					/>
				</>
			)}
			{currentView === "new" && (
				<>
					<h2>{__("New Block Style")}</h2>
					<EditBlockStyle
						attributes={newBlockStyle}
						closeForm={() => {
							setCurrentView("list");
						}}
					/>
				</>
			)}
		</>
	);
}

export default BlockStyles;
