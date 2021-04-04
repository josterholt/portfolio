import {derived} from 'overmind'

export default function ({items, selectedCategory}) {
    const category_filter = selectedCategory

    if (!items) {
        return []
    }

    return Object.keys(items)
        .filter(function (key) {
            let item = items[key]

            if (item.show == false) {
                return false
            }

            const tech_filter = false
            let tech_matches = false
            let category_matches = false

            item.technologies.map(function (tech) {
                if (tech.toUpperCase() == tech_filter) {
                    tech_matches = true
                }
            })

            item.categories.map(function (category) {
                console.log({category, category_filter})
                if (
                    category.toUpperCase() ==
                    (category_filter || '').toUpperCase()
                ) {
                    category_matches = true
                }
            })

            let item_matches = false
            if (!tech_filter && !category_filter) {
                return true
            } else if (
                tech_filter &&
                tech_matches &&
                category_filter &&
                category_matches
            ) {
                return true
            } else if (tech_filter && !category_filter) {
                return tech_matches
            } else if (!tech_filter && category_filter) {
                return category_matches
            } else {
                return false
            }
        })
        .map(function (key) {
            return items[key]
        })
        .sort(function (a, b) {
            if (a.priority < b.priority) {
                return -1
            } else if (a.priority > b.priority) {
                return 1
            } else {
                let current_year = new Date().getFullYear()

                let a_year = a.endYear ? a.endYear : current_year
                let b_year = b.endYear ? b.endYear : current_year

                return a_year < b_year
                    ? 1
                    : a_year > b_year
                    ? -1
                    : a.startYear < b.startYear
                    ? 1
                    : a.startYear > b.startYear
                    ? -1
                    : 0
            }
        })
}
