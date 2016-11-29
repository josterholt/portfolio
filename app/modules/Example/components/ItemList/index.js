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
          return <div style={{textAlign: 'center'}}><a href={link} target='_blank'><img src={image} width="640" /></a></div>;
        } else {
          return <div style={{textAlign: 'center'}}><img src={image} width="640" /></div>;
        }
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

    console.log("foo");
    console.log(this.props.selectedLanguage);
    return (
      <div>
        <div className="col-md-12" style={{textAlign: "center"}}>
        	<ul className="list-unstyled list-inline">
    			<li className={this.props.selectedLanguage == null ? 'active': null }><a onClick={() => signals.languageChanged({ language: null})}>All</a></li>
        		<li className={this.props.selectedLanguage == "PHP" ? 'active': null }><a onClick={() => signals.languageChanged({ language: "PHP"})}>PHP</a></li>
        		<li className={this.props.selectedLanguage == "PYTHON" ? 'active': null }><a onClick={() => signals.languageChanged({ language: "PYTHON"})}>Python</a></li>
        		<li className={this.props.selectedLanguage == "JAVA" ? 'active': null }><a onClick={() => signals.languageChanged({ language: "JAVA"})}>Java</a></li>
        		<li className={this.props.selectedLanguage == "C++" ? 'active': null }><a onClick={() => signals.languageChanged({ language: "C++"})}>C++</a></li>
        		<li className={this.props.selectedLanguage == "C#" ? 'active': null }><a onClick={() => signals.languageChanged({ language: "C#"})}>C#</a></li>
    		</ul>
        </div>

        <div className="col-md-12">
          <ul className="list-unstyled border-separator">
          {this.props.displayedItems.map(function (item, index) {
            return <li key={item.id}>
              <h3 style={{textAlign: 'center'}}>{getHeader(item)}</h3>
              <div style={{textAlign: 'center' }}>{item.startYear} - {displayEndYear(item.endYear)}</div>
              {generateImage(item.image, item.link)}
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
              {displayCode(item.codeSnippet)}              
            </li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
