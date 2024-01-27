import { useState, useEffect } from "@wordpress/element";
import { useEntityRecords } from "@wordpress/core-data";
import { Button, Modal } from "@wordpress/components";
import EditBlockStyle from "./EditBlockStyle";
import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";
import { DataViews } from "@wordpress/dataviews";
import { Icon, edit } from "@wordpress/icons";

function BlockStyles() {
	const [blockStyles, setBlockStyles] = useState([]);
	const [currentView, setCurrentView] = useState("");
	const [currentBlockStyle, setCurrentBlockStyle] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// @todo - grab the current block type as default here
	const newBlockStyle = {
		id: 0,
		title: "New Block Style",
		slug: "new-block-style",
		content: "selector { background-color: red; }",
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
			<Button
				onClick={() => {
					setCurrentView("list");
				}}
				variant="primary"
			>
				{__("All Block Styles")}
			</Button>
			<Button
				onClick={() => {
					setCurrentView("new");
				}}
				variant="primary"
			>
				{__("Add New Block Style")}
			</Button>
			{"list" === currentView && hasResolved && records.length > 0 && (
				<Modal
					title={__("Block Style")}
					size="large"
					onRequestClose={() => {
						setCurrentView("");
					}}
				>
					<DataViews
						data={records}
						// getItemId={function noRefCheck() {}}
						onChangeView={function noRefCheck() {}}
						fields={[
							{
								enableHiding: false,
								getValue: function noRefCheck() {},
								render: ({ item }) => {
									return (
										decodeEntities(item.title?.rendered) || __("(no title)")
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
						actions={[
							{
								callback: (items) => {
									launchEditForm(items[0].id);
								},
								id: "edit",
								label: __("Edit"),
								icon: <Icon icon={edit} />,
							},
							{
								callback: () => {
									// launchEditForm();
								},
								id: "delete",
								label: __("Delete"),
							},
						]}
						paginationInfo={{
							totalPages: 1,
							totalItems: records.length,
						}}
					/>
				</Modal>
			)}
			{("edit" === currentView || "new" === currentView) && (
				<Modal
					title={__("Block Style")}
					onRequestClose={() => {
						setCurrentView("");
					}}
				>
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
				</Modal>
			)}
		</div>
	);
}

export default BlockStyles;
