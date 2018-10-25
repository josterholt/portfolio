import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import HtmlToReact from 'html-to-react';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
  items: ['example', 'items'],
  selectedCategory: ['example', 'selectedCategory'],
  selectedLanguage: ['example', 'selectedLanguage'],
  displayedItems: displayedItems
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.example;

    function generateImage(image, link) {
      if(image) {
        if(link) {
          return <div className="post-image"><a href={link} target='_blank'><img src={image} width="640" /></a></div>;
        } else {
          return <div className="post-image"><img src={image} width="640" /></div>;
        }
      }
      return <div className="no-sample-image"></div>
    }

    function displayEndYear(endYear) {
      if(!endYear) {
        return 'PRESENT';
      }
      return endYear;
    }

    function displayLink(link) {
      if(link) {
        return <div style={{textAlign: 'center'}}><a href={link} target="_blank">Link</a></div>
      }
      return;
    }

    function displayDescription(heading, description, style) {
      var parser = new HtmlToReact.Parser(React);
      if(description == undefined || description == "") {
          return null;
      }

      let heading_comp = <strong>{heading}:</strong>      
      var component = <div className="description" style={style}>{heading_comp} {parser.parse("<div>" + description + "</div>")}</div>
      return component;
    }

    function displayCode(snippet) {
      if(snippet && snippet.code) {
        var langClass = snippet.lang.toLowerCase();
        return <pre className="code-snippet"><code className={langClass}>{snippet.code}</code></pre>          
      }
      return;
    }

    function getHeader(item) {
      if(item.link) {
          return (<a href={item.link} target='_blank'>{item.title}</a>);
      }
      return (item.title);
    }

    const displayRoles = function (item) {
      if(item.roles.length > 0) {
        return <div className="skillset-labels roles">
        <strong>Roles:</strong>&nbsp;
        <ul className="list-inline" style={{display: 'inline-block'}}>{item.roles.map(function (role) {
            return <li><button type='button' className='btn btn-xs btn-success'>{role}</button></li>
        })}</ul>
        </div>
      }
      return null;
    }

    return (
      <div>
        <h1>PROJECTS</h1>
        <div style={{ background: '#000'}}>
          <div className="col-md-12 filters">
            <ul id="category-menu" className="list-unstyled list-inline">
              <li className={this.props.selectedCategory == null ? 'active': null }><a onClick={() => signals.categoryChanged({ category: null})}>All</a></li>
              <li className={this.props.selectedCategory == "GameDev" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "GameDev"})}>Game</a></li>              
              <li className={this.props.selectedCategory == "Website" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "Website"})}>Web</a></li>
              <li className={this.props.selectedCategory == "Application" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "Application"})}>Applications</a></li>
            </ul>
          </div>
        </div>

        <div className="col-md-12 portfolio-list">
          <ul className="list-unstyled border-separator">
          {this.props.displayedItems.map(function (item, index) {
            return <li key={item.id} className="card">
              <div className="main-content">                
                <h2 style={{textAlign: 'center'}}>{getHeader(item)}</h2>
                <div className="date-range">{item.startYear} - {displayEndYear(item.endYear)}</div>

                    {generateImage(item.image, item.link)}

                    <div className="descriptions">
                        {displayDescription('Description', item.description, {marginBottom: '25px'})}
                        {displayDescription('Technical Description', item.technicalDescription, {marginBottom: '25px'})}
                    </div>

                    {displayCode(item.codeSnippet)}


                <div className="skillset-labels-container">
                    <div className="skillset-labels technologies">
                    <strong>Technologies:</strong>&nbsp;
                    <ul className="list-inline" style={{display: 'inline-block'}}>{item.technologies.map(function (tech) {
                        return <li><button type='button' className='btn btn-xs btn-success'>{tech}</button></li>
                    })}</ul>
                    </div>
                    { displayRoles(item) }
                </div>
                <div style={{ clear: 'both'}}></div>
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
