import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>
                <h2>{this.lastName} {this.firstName}</h2>
                <p>Age: {this.age}</p>
                <p>Hair Color: {this.hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;