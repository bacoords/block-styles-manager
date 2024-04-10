import { Button } from "@wordpress/components";

import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";
// import { DataViews } from "@wordpress/dataviews";
import { useSelect } from "@wordpress/data";
import { store } from "./store";

function ViewBlockStyles({ launchEditForm }) {
	const { records, hasResolved } = useSelect((select) => {
		return {
			records: select(store).getBlockStyles(),
			hasResolved: select(store).hasFinishedResolution("getBlockStyles"),
		};
	}, []);

	return (
		<>
			{hasResolved && records.length > 0 && (
				<>
					{records.map((record) => (
						<div key={record.id}>
							<h4>
								<Button
									variant="link"
									onClick={() => launchEditForm(record.id)}
								>
									{decodeEntities(record.title) || __("(no title)")}
								</Button>
							</h4>
						</div>
					))}
				</>
			)}
		</>
	);
}

export default ViewBlockStyles;
