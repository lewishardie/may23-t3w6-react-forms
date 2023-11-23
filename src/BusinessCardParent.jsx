import { Component } from "react"
import BuisnessCardDisplay from "./BusinessCardDisplay";

class BuisnessCardParent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <BuisnessCardDisplay />
            </div>
        )
    }
}


// import react from "react";

// class BuisnessCardParent extends react.Component {}