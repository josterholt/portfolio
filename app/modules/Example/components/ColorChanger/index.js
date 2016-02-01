import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import Title from '../Title';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
  items: ['example', 'items'],
  selectedCategory: ['example', 'selectedCategory'],
  displayedItems: ['example', 'displayedItems']
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.example;

    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        
        <select onChange={signals.categoryChanged}>
          <option>Marketing</option>
          <option>Hobby</option>
        </select>

        <button onClick={() => signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => signals.colorChanged({color: 'blue'})}>Blue</button>
        {this.props.displayedItems.map(function(item) {
          return <li>{item.title} - {item.description}</li>;
        })}
      </div>
    );
  }
}

export default Home;
