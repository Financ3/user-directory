import React, {Component} from 'react';

//this component displays a modal version of the currently displayed card and let's the data in the card be edited in said modal.  
export default class New extends Component {
    // Props data available:


    displayAddModal() {
        let modal = document.getElementById("addCardModal")
        modal.style.display = "block";
    }

    render() {
        return(
            <button id="new" onClick={() => this.displayAddModal()}>New</button>
        )
    }
}