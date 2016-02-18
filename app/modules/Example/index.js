import categoryChanged from './signals/categoryChanged';
import Model from 'cerebral-model-baobab';

const VisibleItems = Model.monkey({
  cursors: {
    items: ['items'],
    ids: ['displayedItems', 'ids'],
    selectedCategory: ['selectedCategory']
  },
  get(data) {
    if(data.ids)
    {
      return data.ids.map((id) => data.items[id]);
    }
    return [];
  }
});

export default (options = {}) => {
  return (module, controller) => {

    module.state({
      title: 'Altered title',
      color: '#000',
      selectedCategory: '',
      displayedItems: VisibleItems,
      items: {
        "item1": {
          "id": 1,
          "title": "Item 1",
          "description": "Item 1 description 1234",
          "categories": ['Marketing', 'Sales']
        },
        "item2": {
          "id": 2,
          "title": "Item 2",
          "description": "Item 2 Description 12345",
          "categories": ["Entertainment", "Hobby"]
        }
      }
    });

    module.signals({
      categoryChanged,
    });

  };
}
