import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    ageUp = () => {this.setState({age: this.state.age + 1})}

    render(){
        return(
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ this.ageUp }>Birthday</button>
            </div>
        )
    }
}

export default PersonCard;