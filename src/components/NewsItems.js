import React, { Component } from 'react';

// 12b8f5a240c7437887c87214ed0c4b80
export class NewsItems extends Component {
  render(){
    let {title, description, Imageurl, Newsurl, author, date} = this.props;
    return(
      <div>
        <div className="card" style={{width: "17rem"}}>
          <img src={!Imageurl?"https://s01.sgp1.cdn.digitaloceanspaces.com/book/176816-uadyilvbxq-1657169689.jpeg":Imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={Newsurl} className="btn btm-sm btn-primary" target="_blank">Read More</a>
          </div>
        </div>
      </div> 
    )
  }
}
export default NewsItems

