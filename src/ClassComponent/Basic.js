import React from "react"
class Basic extends React.Component{
    constructor(){
        super();
        this.state={
            name:"shashi"
        }
       console.log("i am constructor")
        }
        componentDidMount(){
            console.log("i am ComponentDidMount")
            this.setState({name:"ranjan"})
        }


render(){
    console.log("i am rander method")
    return(
        <h2>hey... class Component</h2>

    )
}
}
export default Basic;