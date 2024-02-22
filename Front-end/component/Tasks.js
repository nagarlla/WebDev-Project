import React, { Component } from 'react';

const TasksStyles = `
  .github-profile {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }

  .name-bio {
    text-align: center;
    margin-bottom: 20px;
  }

  .name {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .bio {
    font-size: 1.2rem;
    color: #666;
  }

  .location {
    font-size: 1rem;
    color: #999;
  }

  .heroes {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .hero {
    width: calc(33.333% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #f2f2f2;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
  }

  .hero .title {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hero .description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  .hero .tech {
    display: block;
    font-size: 0.9rem;
    color: #999;
  }

  .pagination {
    text-align: center;
    margin-bottom: 20px;
  }

  .prev {
    display: inline-block;
    font-size: 1rem;
    color: #666;
    margin-right: 10px;
  }

  .page-number {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .twitter-link {
    text-align: center;
  }

  .twitter-link a {
    display: block;
    font-size: 1.2rem;
    color: #00acee;
    text-decoration: none;
    margin-bottom: 20px;
  }
`;

class Tasks extends Component {
  render() {
    return (
      <div className="github-profile">
        <div className="name-bio">
          <span className="name">John Doe</span>
          <p className="bio">Bio goes here</p>
          <span className="location">Orlando</span>
        </div>
        <div className="heroes">
          <div className="hero">
            <span className="title">Heroes</span>
            <p className="description">Heroes description goes here</p>
            <span className="tech">JavaScript angular angularjs</span>
          </div>
          {/* ... Other hero elements ... */}
        </div>
        <div className="pagination">
          <span className="prev">←Older</span>
          <span className="page-number">600</span>
        </div>
        <div className="twitter-link">
          <a href="https://twitter.com/john doe">Twitter: @john doe</a>
        </div>
      </div>
    );
  }
}

// Inject styles into the head of the document
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = TasksStyles;
document.head.appendChild(styleElement);

export default Tasks;
