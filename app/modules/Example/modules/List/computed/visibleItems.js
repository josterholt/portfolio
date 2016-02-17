export default function (get) {
	const items = get(['example', 'items']);
	const filter = get(['example', 'selectedCategory']);

	return Object.keys(items).filter(function (key) {
		let item = items[key];

		return (
			!filter || (item.categories.indexOf(filter) !== -1)
		);
	}).map(function (key) {
		return items[key];
	});
};