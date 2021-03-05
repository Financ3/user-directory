import React, {Component} from 'react';

export default class Previous extends Component {
    // Props data available:
    //      updateIndex={this.updateIndex}
    //      currentIndex={this.state.currentIndex}
    //      dataArray={this.state.dataArray}

    decrementDisplay() {
        //check if there is more data to display
        if ((this.props.currentIndex+1)>1) {
            //decrement the current index by 1
            let currentIndex = this.props.currentIndex;
            let updatedIndex = currentIndex - 1;
            //update the current index on the parent component
            this.props.updateIndex(updatedIndex);
        } else {
            //alert the user if they attempt "previous" on the last array item
            window.alert("You've reached the beginning of the list!");
        }
        
    }

    render() {
        return(
            <button className="previous" onClick={() => this.decrementDisplay()}>&#60;Previous</button>
        )
    }
}