import { Button } from "@wordpress/components";

import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";
import { DataViews } from "@wordpress/dataviews";

function ViewBlockStyles({ launchEditForm, records, hasResolved }) {
	console.log(records);
	return (
		<>
			{hasResolved && records.length > 0 && (
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
											{decodeEntities(item.title) || __("(no title)")}
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
								return <code>{`.${item.slug}`}</code>;
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
		</>
	);
}

export default ViewBlockStyles;
