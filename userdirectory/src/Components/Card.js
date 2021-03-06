import React, {Component} from 'react';

export default class Card extends Component {
// prop data fields available: 
    // dataArray={this.state.dataArray} 
    // currentIndex={this.state.currentIndex}

  render() {
    return(
      <section className="card">
          <div className="counter">{this.props.currentIndex+1}/{this.props.dataArray.length}</div>
          <h2>{this.props.dataArray[this.props.currentIndex].name.first} {this.props.dataArray[this.props.currentIndex].name.last}</h2>
          <ul>
            <li>From: {this.props.dataArray[this.props.currentIndex].city}, {this.props.dataArray[this.props.currentIndex].country}</li>
            <li>Job Title: {this.props.dataArray[this.props.currentIndex].title}</li>
            <li>Employer: {this.props.dataArray[this.props.currentIndex].employer}</li>
          </ul>
          <h3>Favorite Movies:</h3>
          <ul id="moviesList">
            {this.props.dataArray[this.props.currentIndex].favoriteMovies.map((movie, index)=><li key={index}>{(index+1)}: {movie}</li>)}
          </ul>
      </section>
    )
  }
}