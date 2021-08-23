

import React from "react"
class GetDriveStateFromProps extends React.Component {
    constructor() {
        console.log("constructor")
        super();
        this.state = {
            name: "shashi",
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log(" getDerivedStateFromProps")
          return(
            
              {name:props.data}
    
          )
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <>
                <h1>{this.state.name}</h1>
            </>
        )
    }
}
export default GetDriveStateFromProps;
   
