import React, {Component} from 'react';

export default class Next extends Component {
    // Props data available:
    //      updateIndex={this.updateIndex}
    //      currentIndex={this.state.currentIndex}
    //      dataArray={this.state.dataArray}

    incrementDisplay() {
        //check if there is more data to display
        if ((this.props.currentIndex+1)<this.props.dataArray.length) {
            //increment the current index by 1
            let currentIndex = this.props.currentIndex;
            let updatedIndex = currentIndex + 1;
            //update the current index on the parent component
            this.props.updateIndex(updatedIndex);
        } else {
            //alert the user if they attempt "next" on the last array item
            window.alert("You've reached the end of the list!");
        }
        
    }

    render() {
        return(
            <button className="next" onClick={() => this.incrementDisplay()}>Next&#62;</button>
        )
    }
}