import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor from new conponent");
    this.state = {
        articles: [],
        loading: false
    }
  }

 async componentDidMount(){
     console.log("Componenet");
     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6b131a2ca424ba6a53c3d2fb734f925";
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({articles: parsedData.articles})
  }
  render() {
    console.log("render");
    return (
      <div className='container my-3 mb-6'>
            <h1>MyNews - HeadLines</h1>

            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key = {element.url}>
                <NewsItem  title = {element.title?element.title:" "} description = {element.description?element.description:" "} imgURL = {element.urlToImage} newsURL = {element.url}/>
                </div>
            })}

            </div>
      </div>
    )
  }
}

export default News
