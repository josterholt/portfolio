import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import HtmlToReact from 'html-to-react';

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

    function generateImage(image) {
      if(image) {
        return <div style={{textAlign: 'center'}}><img src={image} width="640" /></div>;
      }
    }

    function displayEndYear(endYear) {
      if(!endYear) {
        return 'Present';
      }
      return endYear;
    }

    function displayLink(link) {
      if(link) {
        return <div style={{textAlign: 'center'}}><a href={link} target="_blank">Link</a></div>
      }
      return;
    }

    function displayDescription(description) {
      var parser = new HtmlToReact.Parser(React);
      var component = parser.parse("<div>" + description + "</div>")
      return component;
    }

    return (
      <div>
        <div className="col-md-12">
          <select onChange={(e) => signals.categoryChanged({ category: e.target.value})}>
            <option>Website</option>
            <option>Marketing</option>
            <option>Hobby</option>
          </select>
        </div>

        <div className="col-md-12">
          <ul className="list-unstyled border-separator">
          {this.props.displayedItems.map(function (item, index) {
            return <li key={item.id}>
              <h3 style={{textAlign: 'center'}}>{item.title}</h3>
              <div style={{textAlign: 'center' }}>{item.startYear} - {displayEndYear(item.endYear)}</div>
              {displayLink(item.link)}
              {generateImage(item.image)}
              <strong>Description:</strong>
              <div>{displayDescription(item.description)}</div>
              <div style={{marginBottom: '10px', marginTop: '10px'}}>
                <strong>Technologies:</strong>&nbsp;
                <ul className="list-inline" style={{display: 'inline-block'}}>{item.technologies.map(function (tech) {
                  return <li><button type='button' className='btn btn-xs btn-success'>{tech}</button></li>
                })}</ul>
              </div>
              <div style={{marginBottom: '10px', marginTop: '10px'}}>
                <strong>Roles:</strong>&nbsp;
                <ul className="list-inline" style={{display: 'inline-block'}}>{item.roles.map(function (role) {
                  return <li><button type='button' className='btn btn-xs btn-success'>{role}</button></li>
                })}</ul>
              </div>
            </li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
