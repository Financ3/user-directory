import React, {Component} from 'react';

//this component displays a modal version of the currently displayed card and let's the data in the card be edited in said modal.  
export default class Delete extends Component {
    // Props data available:


    displayDeleteModal() {
        let modal = document.getElementById("deleteCardModal")
        modal.style.display = "block";
    }

    render() {
        return(
            <button id="new" onClick={() => this.displayDeleteModal()}>Delete</button>
        )
    }
}