import React, {Component} from 'react';
import data from './Modules/data';
import Card from './Components/Card';
import Next from './Components/Next';
import Previous from './Components/Previous';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //data fields required to display/track the card details
      dataArray: data,
      currentIndex: 0,
      totalIndices: data.length,
    }
  }

  updateIndex = (val) => {
    this.setState({currentIndex: val});
  }

  render() {
    return (
      <div className="App">
            <header><h2>Home</h2></header>
            <section className="main-view">
              <Card 
                dataArray={this.state.dataArray} 
                currentIndex={this.state.currentIndex}/>
              <section id="buttonsContainer">
                <Previous 
                  updateIndex={this.updateIndex}
                  currentIndex={this.state.currentIndex}
                  dataArray={this.state.dataArray}/>
                <div className="editDeleteNewContainer">
                  <button id="edit">Edit</button>
                  <button id="delete">Delete</button>
                  <button id="new">New</button>
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
