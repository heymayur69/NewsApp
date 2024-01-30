import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, discription} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.mos.cms.futurecdn.net/2gyXj5e225bQMzvEPFmknL-1200-80.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem

