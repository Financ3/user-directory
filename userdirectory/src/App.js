import React, {Component} from 'react';
import data from './Modules/data';
import Card from './Components/Card';
import Next from './Components/Next';
import Previous from './Components/Previous';
import Edit from './Components/Edit';
import EditModal from './Components/EditModal';
import AddModal from './Components/AddModal';
import New from './Components/New';
import Delete from './Components/Delete';
import DeleteModal from './Components/DeleteModal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //data fields required to display/track the card details
      dataArray: data,
      currentIndex: 0,
    }
  }

  updateIndex = (val) => {
    this.setState({currentIndex: val});
  }

  updateContactObject = (first, last, homeCity, homeCountry, jobTitle, employer, movie1, movie2, movie3) => {
    let newArray = this.state.dataArray;
    newArray[this.state.currentIndex].name.first = first;
    newArray[this.state.currentIndex].name.last = last;
    newArray[this.state.currentIndex].city = homeCity;
    newArray[this.state.currentIndex].country = homeCountry;
    newArray[this.state.currentIndex].employer = employer;
    newArray[this.state.currentIndex].title = jobTitle;
    newArray[this.state.currentIndex].favoriteMovies[0] = movie1;
    newArray[this.state.currentIndex].favoriteMovies[1] = movie2;
    newArray[this.state.currentIndex].favoriteMovies[2] = movie3;

    this.setState({dataArray: newArray});
  }

  addContactObject = (object) => {
    let newArray = this.state.dataArray;
    newArray.push(object);

    this.setState({dataArray: newArray});
  }

  deleteContactObject = (index) => {
    let newArray = this.state.dataArray;

    newArray.splice(index, 1);
    this.setState({dataArray: newArray});
  }

  render() {
    return (
      <div className="App">
            <header><h2>Home</h2></header>
            <section className="main-view">
              <EditModal 
                dataArray={this.state.dataArray} 
                currentIndex={this.state.currentIndex}
                updateContactObject={this.updateContactObject}/>
              <AddModal 
                dataArray={this.state.dataArray} 
                currentIndex={this.state.currentIndex}
                addContactObject={this.addContactObject}/>
              <DeleteModal
                dataArray={this.state.dataArray} 
                currentIndex={this.state.currentIndex}
                deleteContactObject={this.deleteContactObject}/>
              <Card 
                dataArray={this.state.dataArray} 
                currentIndex={this.state.currentIndex}/>
              <section id="buttonsContainer">
                <Previous 
                  updateIndex={this.updateIndex}
                  currentIndex={this.state.currentIndex}
                  dataArray={this.state.dataArray}/>
                <div className="editDeleteNewContainer">
                  <Delete />
                  <Edit />
                  <New />
                </div>
                <Next 
                  updateIndex={this.updateIndex}
                  currentIndex={this.state.currentIndex}
                  dataArray={this.state.dataArray}/>
              </section>
            </section>
      </div>
    )
  };
}

export default App;
