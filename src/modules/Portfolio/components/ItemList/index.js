import React from 'react';
import displayedItems from '../../modules/List/computed/visibleItems.js';
import HtmlToReact from 'html-to-react';
import { Col, Row, Card } from 'tailwind-react-ui'
//import { useState } from '../../../../overmind'


// @Cerebral({
//   title: ['example', 'title'],
//   color: ['example', 'color'],
//   items: ['example', 'items'],
//   selectedCategory: ['example', 'selectedCategory'],
//   selectedLanguage: ['example', 'selectedLanguage'],
//   displayedItems: displayedItems
// })

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


export default function () {
  //const signals = this.props.signals.example;
  const signals = {}

  return (
    <div>   
        <div className="card sm:flex">
            <div className="p-4">
                <h2 className="card__title">Test Title</h2>
                <p className="card__body">Test body</p>
                <button className="card__button">More</button>
            </div>
        </div>
    </div>  
    //   <div style={{ marginTop: "50px", marginBottom: "50px"}}>
    //     <h1>Justin Osterholt</h1>
    //     <div>Software Engineering Manager | Full Stack Engineer</div>
    //     <div style={{ marginTop: "50px", color: "#eee", fontSize: "18px" }}>
    //       <p>
    //         Hello, I'm Justin, a software engineering manager and full stack developer with 18+ years experience developing web applications. I strive to find ideal customized solutions for enterprise problems.
    //       </p>

    //       <p>
    //         I lead and enable engineering teams, offering guidance and helping developers grow through weekly one-on-ones, delegation, and feedback. I use agile and scrum principles 
    //         to help manage work and continually improve. I support and thrive in an environment that encourages collaboration, curiosity, and communication.
    //       </p>

    //       <p>
    //         I manage applications from infrastructure to code, including the build pipeline and testing. In my effort to build quality performant systems that scale, I use best-practice 
    //         design patterns, object-oriented programming principles, and strive for well documented readable code.
    //       </p>
    //     </div>
    //   </div>

    //   <div style={{ background: '#000'}}>
    //     <div className="col-md-12 filters">
    //       <ul id="category-menu" className="list-unstyled list-inline">
    //         <li className={this.props.selectedCategory == null ? 'active': null }><a onClick={() => signals.categoryChanged({ category: null})}>All</a></li>
    //         <li className={this.props.selectedCategory == "GameDev" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "GameDev"})}>Game</a></li>              
    //         <li className={this.props.selectedCategory == "Website" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "Website"})}>Web</a></li>
    //         <li className={this.props.selectedCategory == "Application" ? 'active': null }><a onClick={() => signals.categoryChanged({ category: "Application"})}>Applications</a></li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="col-md-12 portfolio-list">
    //     <ul className="list-unstyled border-separator">
    //     {this.props.displayedItems.map(function (item, index) {
    //       return <li key={item.id} className="card">
    //         <div className="main-content">                
    //           <h3 style={{textAlign: 'center'}}>{getHeader(item)}</h3>
    //           <div className="date-range">{item.startYear} - {displayEndYear(item.endYear)}</div>

    //               {generateImage(item.image, item.link)}

    //               <div className="descriptions">
    //                   {displayDescription('Description', item.description, {marginBottom: '25px'})}
    //                   {displayDescription('Technical Description', item.technicalDescription, {marginBottom: '25px'})}
    //               </div>

    //               {displayCode(item.codeSnippet)}


    //           <div className="skillset-labels-container">
    //               <div className="skillset-labels technologies">
    //               <strong>Technologies:</strong>&nbsp;
    //               <ul className="list-inline" style={{display: 'inline-block'}}>{item.technologies.map(function (tech) {
    //                   return <li><button type='button' className='btn btn-xs btn-success'>{tech}</button></li>
    //               })}</ul>
    //               </div>
    //               { displayRoles(item) }
    //           </div>
    //           <div style={{ clear: 'both'}}></div>
    //         </div>
    //       </li>
    //     })}
    //     </ul>
    //   </div>
    // </div>
  );
}