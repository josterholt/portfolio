export default function (get) {
	const items = get(['example', 'items']);
	const filter = get(['example', 'selectedCategory']);

	return Object.keys(items).filter(function (key) {
		let item = items[key];

		return (
			!filter || (filter in item.categories)
		);
	}).map(function (key) {
		return items[key];
	});
};