import categoryChanged from './signals/categoryChanged';
import Model from 'cerebral-model-baobab';
import items from '../../data/items.json';

export default (options = {}) => {
  return (module, controller) => {

  	module.addState({
  		'items': items
  	});

    module.addSignals({
		categoryChanged,
    });

  };
}
