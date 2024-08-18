import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor from new conponent");
    this.state = {
        articles: [],
        loading: false,
        page:1

    }
  }

 async componentDidMount(){
     console.log("Componenet");
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6b131a2ca424ba6a53c3d2fb734f925&&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
  }
   handleNextClick = async ()=>{
    console.log("Next Page");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
 
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6b131a2ca424ba6a53c3d2fb734f925&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
  
    })
  }
  }
   handlePreviousClick = async ()=>{
    console.log("Previous Page")
    console.log("Next Page")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6b131a2ca424ba6a53c3d2fb734f925&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false

    })
  }
  render() {
    console.log("render");
    return (
      <div className='container my-3 mb-6'>
            <h1 className='text-center'>MyNews - HeadLines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3" key = {element.url}>
                <NewsItem  title = {element.title?element.title:" "} description = {element.description?element.description:" "} imgURL = {element.urlToImage} newsURL = {element.url}/>
                </div>
            })}

            </div>
            <div className="container d-flex justify-content-between">
              <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News
