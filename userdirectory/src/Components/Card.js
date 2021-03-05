import React, {Component} from 'react';

export default class Card extends Component {
    // prop data fields available: 
        // dataArray={this.state.dataArray} 
        // currentIndex={this.state.currentIndex}

        // Format for object in the data array:
        //     id: 1,
        //     name: { first: "Waylin", last: "Lumsdon" },
        //     city: "Likiep",
        //     country: "Marshall Islands",
        //     employer: "Twinder",
        //     title: "Physical Therapy Assistant",
        //     favoriteMovies: [
        //     "That Night in Varennes (Nuit de Varennes, La)",
        //     "Spy(ies) (Espion(s))",
        //     "Klip (Clip)"
        //     ]

    render() {
        return(
            <section className="card">
                <div id="counter">{this.props.currentIndex+1}/{this.props.dataArray.length}</div>
                <h2>{this.props.dataArray[this.props.currentIndex].name.first} {this.props.dataArray[this.props.currentIndex].name.last}</h2>
                <ul>
                  <li>From: {this.props.dataArray[this.props.currentIndex].city}, {this.props.dataArray[this.props.currentIndex].country}</li>
                  <li>Job Title: {this.props.dataArray[this.props.currentIndex].title}</li>
                  <li>Employer: {this.props.dataArray[this.props.currentIndex].employer}</li>
                </ul>
                <h3>Favorite Movies:</h3>
                <ul id="moviesList">
                  {this.props.dataArray[this.props.currentIndex].favoriteMovies.map((movie, index)=><li key={index}>{movie}</li>)}
                </ul>
              </section>
        )
    }
}