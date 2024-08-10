import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
            <h2>MyNews - HeadLines</h2>
            <div className="row">
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description" img = "https://cdn.punchng.com/wp-content/uploads/2023/05/06003853/Abayomi-Ajayi.jpg"/>
                    </div>
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description"/>
                </div>
                <div className="col-md-3">
                    <NewsItem title = "My Title" description = "My description"/>
                </div>            
            </div>
      </div>
    )
  }
}

export default News
