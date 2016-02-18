import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js'

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
  items: ['example', 'items'],
  selectedCategory: ['example', 'selectedCategory'],
  displayedItems: displayedItems
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.example;

    const getDisplayItems = function (self) {
        for(item in self.props.items) {
          console.debug(item);
          if(self.props.selectedCategory in item.categories)
          {
            return <li>{item.title} - {item.description}</li>;
          }
      }
    }

    return (
      <div>       
        <select onChange={(e) => signals.categoryChanged({ category: e.target.value})}>
          <option>Marketing</option>
          <option>Hobby</option>
        </select>
        <ul>
        {this.props.displayedItems.map(function (item, index) {
          return <li key={item.id}>{item.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default Home;
