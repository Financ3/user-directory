import React, {Component} from 'react';

//this component displays a modal version of the currently displayed card and let's the data in the card be edited in said modal.  
export default class AddModal extends Component {
// prop data fields available: 
    // dataArray={this.state.dataArray} 
    // currentIndex={this.state.currentIndex}
    // addContactObject={this.addContactObject}

  constructor(props) {
    super();
    this.state = {
      //these are all the form data fields that a user can edit
      firstName:'',
      lastName: '',
      homeCity: '',
      homeCountry: '',
      jobTitle: '',
      employer: '',
      movie1: '',
      movie2: '',
      movie3: ''
      //end all form data fields that a user can edit.
    }
  }
      
  closeWithoutAdding() {
    let modal = document.getElementById("addCardModal")
    modal.style.display = "none";

    this.setState({
    firstName:'',
    lastName: '',
    homeCity: '',
    homeCountry: '',
    jobTitle: '',
    employer: '',
    movie1: '',
    movie2: '',
    movie3: ''});
  }

  saveNewContact() {
      let newObject = {};
      newObject.id = (this.props.dataArray.length+1);
      newObject.name = {
          first: this.state.firstName,
          last: this.state.lastName
      }
      newObject.city = this.state.homeCity;
      newObject.country = this.state.homeCountry;
      newObject.title = this.state.jobTitle;
      newObject.employer = this.state.employer;
      newObject.favoriteMovies = [];
      newObject.favoriteMovies[0] = this.state.movie1;
      newObject.favoriteMovies[1] = this.state.movie2;
      newObject.favoriteMovies[2] = this.state.movie3;

      for (let key in newObject) {
        if (newObject[key]==='') {
            window.alert("Whoops! Please fill out all form fields");
            return;
        }
      }

      this.props.addContactObject(newObject);

      this.setState({
        firstName:'',
        lastName: '',
        homeCity: '',
        homeCountry: '',
        jobTitle: '',
        employer: '',
        movie1: '',
        movie2: '',
        movie3: ''
      });

      let modal = document.getElementById("addCardModal")
      modal.style.display = "none";
  }

  handleFirstName(ev) {
    this.setState({firstName: ev.target.value});
  }

  handleLastName(ev) {
    this.setState({lastName: ev.target.value});
  }

  handleHomeCity(ev) {
    this.setState({homeCity: ev.target.value});
  }

  handleHomeCountry(ev) {
    this.setState({homeCountry: ev.target.value});
  }

  handleJobTitle(ev) {
    this.setState({jobTitle: ev.target.value});
  }

  handleEmployer(ev) {
    this.setState({employer: ev.target.value});
  }

  handleMovies(ev, index) {
    if (index===0) {
      this.setState({movie1: ev.target.value});
    } else if (index===1) {
      this.setState({movie2: ev.target.value});
    } else if (index===2) {
      this.setState({movie3: ev.target.value});
    }
  }

  render() {
      return(
        <section id="addCardModal">
          <h2>Add New Contact: </h2>
          <h4>First Name:</h4>
            <input id="addFirstName" value={this.state.firstName} onChange={ev => this.handleFirstName(ev)}></input> 
          <h4>Last Name:</h4>
            <input id="addLastName" value={this.state.lastName} onChange={ev => this.handleLastName(ev)}></input>
          <ul>
            <li>Home City: <input id="addHomeCity" value={this.state.homeCity} onChange={ev => this.handleHomeCity(ev)}></input></li>
            <li>Home Country: <input id="addHomeCountry" value={this.state.homeCountry} onChange={ev => this.handleHomeCountry(ev)}></input></li>
            <li>Job Title: <input id="addJobTitle" value={this.state.jobTitle} onChange={ev => this.handleJobTitle(ev)}></input></li>
            <li>Employer: <input id="addEmployer" value={this.state.employer} onChange={ev => this.handleEmployer(ev)}></input></li>
          </ul>
          <h3>Favorite Movies:</h3>
          <ul id="addMoviesList">
            {this.props.dataArray[this.props.currentIndex].favoriteMovies.map((movie, index)=>{
              let movieIdText = "addMovie"
              let currentMovie = "";
              if (index===0) {
                currentMovie = this.state.movie1;
              } else if (index===1) {
                currentMovie = this.state.movie2;
              } else if (index === 2) {
                currentMovie = this.state.movie3;
              }

              return (
                  <li key={index}>
                    {index+1}: <input id={movieIdText + (index+1).toString()} value={currentMovie} onChange={ev => this.handleMovies(ev, index)}></input>
                  </li>
                )
          })}
          </ul>
          <div className="modalButtonContainer">
            <button id="closeWithoutAdding" onClick={() => this.closeWithoutAdding()}>Close Without Adding</button>
            <button id="addNewContact" onClick={() => this.saveNewContact()}>Add New Contact</button>
          </div>
      </section>
    )
  }
}