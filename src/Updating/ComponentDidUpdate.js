import React from "react"
class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            name:"shashi"
        }
    }
    render(){
        return(
            <>
              <h1>{this.state.name}</h1>
            </>
        )
    }
}
