import colorChanged from './signals/colorChanged';
import rootRouted from './signals/rootRouted';
import categoryChanged from './signals/categoryChanged';

export default (options = {}) => {
  return (module, controller) => {

    module.state({
      title: 'Altered title',
      color: '#000',
      selectedCategory: null,
      displayedItems: function () {
        console.debug(arguments);
        return {
          initialState: [],
          lookupState: ['items'],
          get(cerebral, lookupState, refs) {
            return refs.map(function (ref) {
              return lookupState.items[ref];
            })
          }
        }
      },
      items: {
        "item1": { 
          "title": "Item 1",
          "description": "Item 1 description 1234",
          "categories": ['Marketing', 'Sales']
        },
        "item2": {
          "title": "Item 2",
          "description": "Item 2 Description 12345",
          "categories": ["Entertainment", "Hobby"]
        }
      }
    });
    console.debug("testing");

    module.signals({
      rootRouted,
      colorChanged,
      categoryChanged,
    });

  };
}
