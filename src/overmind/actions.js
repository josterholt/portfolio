export const languageChanged = function ({state}, value) {
    state.selectedLanguage = value
}

export const categoryChanged = function ({state}, value) {
    state.selectedCategory = value.category
}
