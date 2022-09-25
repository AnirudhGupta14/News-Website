import '../css/News.css';
import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

//3eb7ee2eaece4b3c86b4dde4fda09662
//12b8f5a240c7437887c87214ed0c4b80

export class News extends Component {

  static defaultProps = {
    word: 'India'
  }

  static propTypes = {
    word: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `Global News Network - ${this.props.word}`;
  }

  async UpdateNews()
  {
    let url = `https://newsapi.org/v2/everything?q=${this.props.word}&apiKey=3eb7ee2eaece4b3c86b4dde4fda09662&page=1&pageSize=40`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  async componentDidMount()
  {
    this.UpdateNews();
  }

  fetchMoreData = async () => {
      let url = `https://newsapi.org/v2/everything?q=${this.props.word}&apiKey=3eb7ee2eaece4b3c86b4dde4fda09662&page=${this.state.page + 1}&pageSize=40`;
      this.setState({page: this.state.page + 1})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        loading: false,
        totalResults: parsedData.totalResults
      });
  };


  render(){
    return(
      <div className="newsbox">
        <div className="newsbar">
          <div className="news-heading">Top News Headlines - {this.props.word}</div>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}>
                <div className="container">
                  <div className="row">
                    {this.state.articles.map((ele)=>{
                        return <div className="col-md-4 news-bar" key={ele.url}>
                                  <NewsItems title={ele.title} description={ele.description} Imageurl={ele.urlToImage} Newsurl={ele.url} author={ele.author} date={ele.publishedAt}/>
                              </div>
                    })}
                  </div>
                </div>     
          </InfiniteScroll>
        </div> 
      </div>
    )
  }
}

export default News;

