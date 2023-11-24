import { Component } from "react"
import BuisnessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BuisnessCardForm";

export default class BuisnessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            name: "Default Name",
            email: "example@email.com",
            editMode: false
        }
    }

    updateState = (stateKeyId, newStateValue) => {
        if (Object.keys(this.state).includes(stateKeyId)){
            if (stateKeyId === "name") {
                //-- Add name validation here
            } else if (stateKeyId === "email") {
                //-- Add email validation here
            }
            
            this.setState({
                [stateKeyId]: newStateValue
            })
        } else {
            console.warn("Incorrect key for the state")
        }
    }

    render(){
        if (this.state.editMode) {
            return(
                <BusinessCardForm 
                    name={this.state.name} 
                    email={this.state.email}
                    updateState={this.updateState}
                />
            )
        } else {
            return (
                <BuisnessCardDisplay name={this.state.name} email={this.state.email}/>
            )
        }
    }
}


// import react from "react";

// class BuisnessCardParent extends react.Component {}