import React, {Component} from 'react';

//this component displays a modal version of the currently displayed card and let's the data in the card be edited in said modal.  
export default class Edit extends Component {
    // Props data available:


    displayEditModal() {
        let modal = document.getElementById("editCardModal")
        modal.style.display = "block";
    }

    render() {
        return(
            <button id="edit" onClick={() => this.displayEditModal()}>Edit</button>
        )
    }
}