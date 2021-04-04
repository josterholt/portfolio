import {derived} from 'overmind'
import items from '../data/items.json'
import displayItems from './displayItems'

export const state = {
    selectedCategory: '',
    items: items,
    displayItems: derived(displayItems),
}
