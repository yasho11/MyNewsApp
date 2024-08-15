import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={
              !imgURL
                ? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdevelopers.elementor.com%2Fdocs%2Fassets%2Fimg%2Felementor-placeholder-image.png&f=1&nofb=1&ipt=2bfe701b8aabdacefe364f558df418c73c1beb2d9c982b4cd77545ad3fd9777c&ipo=images'
                : imgURL
            }
            className="card-img-top"
            alt={title || 'News Image'}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} className="btn btn-sm btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
