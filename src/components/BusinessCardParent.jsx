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

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    //-- Obvious way to display edit mode on or off, using if statement
    // render(){
    //     if (this.state.editMode) {
    //         return(
    //             <div>
    //                 <BusinessCardForm 
    //                 name={this.state.name} 
    //                 email={this.state.email}
    //                 updateState={this.updateState}
    //                 />
    //                 <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //             <BuisnessCardDisplay name={this.state.name} email={this.state.email}/>
    //             <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
    //             </div>
    //         )
    //     }
    // }

    //-- Dryer way to write the above code, using ?(trenary (conditional logic, that is the same as and if statement))
    render(){

        return(
            <div>
                {
                    this.state.editMode ?
                        <BusinessCardForm 
                        name={this.state.name} 
                        email={this.state.email}
                        updateState={this.updateState}
                        />
                    : <BuisnessCardDisplay name={this.state.name} email={this.state.email}/>
                }
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
            </div>
        )
    }
}


// import react from "react";

// class BuisnessCardParent extends react.Component {}