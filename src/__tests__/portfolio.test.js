import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ItemList from '../modules/Portfolio/components/ItemList'
import {Provider} from 'overmind-react'
import {createOvermindMock} from 'overmind'
import {config} from '../overmind'
import _ from 'lodash'

const portfolio_sample_items = [
    {
        id: 1,
        title: 'Test Item 1',
        startYear: 2010,
        endYear: 2012,
        description: 'Sample description',
        technicalDescription: '',
        roles: ['Lead Developer'],
        technologies: ['Ignition', 'Java', 'Jython'],
        categories: ['Website', 'Marketing', 'Sales'],
        priority: 3,
        show: 1,
    },
    {
        id: 2,
        title: 'Test Item 2',
        startYear: 2014,
        endYear: 2016,
        description: 'Sample description',
        technicalDescription: '',
        roles: ['Lead Developer'],
        technologies: ['Ignition', 'Java', 'Jython'],
        categories: ['Marketing', 'Sales'],
        priority: 3,
        show: 1,
    },
]

const portfolio_selected_category = 'Website'

describe('Portfolio List', () => {
    test('can display all item cards', async () => {
        /*
         * STEP 1. ENVIRONMENT SETUP
         */
        const overmind = createOvermindMock(config, state => {
            state.items = portfolio_sample_items
        })

        /*
         * STEP 2. RENDER COMPONENT
         */
        const {getAllByTestId, getByText, debug} = render(
            <Provider value={overmind}>
                <ItemList />
            </Provider>,
        )

        /*
         * STEP 3. ASSERT ALL ITEMS DISPLAY
         */
        expect(getAllByTestId('portfolio-card').length).toBe(
            overmind.state.items.length,
        )
    })

    test('can display filtered cards', async () => {
        /*
         * STEP 1. ENVIRONMENT SETUP
         */
        const overmind = createOvermindMock(config, state => {
            state.items = portfolio_sample_items
        })

        /*
         * STEP 2. SET CATEGORY / UPDATED CACHED DERIVED FUNCTION
         */
        await overmind.actions.categoryChanged({
            category: portfolio_selected_category,
        })
        expect(overmind.state.selectedCategory).toBe(
            portfolio_selected_category,
        )

        /*
         * STEP 3. RENDER COMPONENT
         */
        const {getAllByTestId, getByText, debug} = render(
            <Provider value={overmind}>
                <ItemList />
            </Provider>,
        )

        /*
         * STEP 4. ASSERT ONLY FILTERED ITEMS DISPLAY
         */
        expect(getAllByTestId('portfolio-card').length).toBe(
            overmind.state.items.filter(function (item) {
                return (
                    item.categories.indexOf(portfolio_selected_category) !== -1
                )
            }).length,
        )
    })
})
