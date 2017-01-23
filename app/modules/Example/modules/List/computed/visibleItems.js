export default function (get) {
	const items = get(['example', 'items']);
	const category_filter = get(['example', 'selectedCategory']);
	const tech_filter = get(['example', 'selectedLanguage']);

	if(!items) {
		return [];
	}

	return Object.keys(items).filter(function (key) {
		let item = items[key];
		
		let tech_matches = false;
		let category_matches = false;
		
		item.technologies.map(function (tech) {
			if(tech.toUpperCase() == tech_filter) {
				tech_matches = true;
			}
		});

		//console.log(category_filter);

		item.categories.map(function (category) {
			//console.log(category.toUpperCase(), " ", (category_filter||"").toUpperCase())			
			if(category.toUpperCase() == (category_filter||"").toUpperCase()) {
				console.log("Match");
				category_matches = true;
			}
		});

		let item_matches = false;
		if(!tech_filter && !category_filter) {
			return true;
		} else if(tech_filter && tech_matches && category_filter && category_matches) {
			return true;
		} else if(tech_filter && !category_filter) {
			return tech_matches;
		} else if(!tech_filter && category_filter) {
			return category_matches;
		} else {
			return false;
		}
	}).map(function (key) {
		return items[key];
	}).sort(function(a, b) {
		if(a.priority < b.priority) {
			return -1;
		} else if(a.priority > b.priority) {
			return 1;
		} else {
			let current_year = new Date().getFullYear()

			let a_year = a.endYear ? a.endYear : current_year;
			let b_year = b.endYear ? b.endYear : current_year;

			return a_year < b_year ? 1 : a_year > b_year ? -1 : a.startYear < b.startYear ? 1 : a.startYear > b.startYear ? -1 : 0;
		}
		//console.log(a_year + "(" + a.startYear + ")" + " vs " + b_year + "(" + b.startYear + ")" + " " + v);
		//return v;
	});
};