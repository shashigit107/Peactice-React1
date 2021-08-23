import React from "react"
import GetDriveStateFromProps from "./GetDriveStateFromProps";
class SecondCompOfGDSFP extends React.Component{
    constructor(){
        super();
        this.state={
            value:"ranjan"
        }
    }
    render(){
        return(
           <>
           <GetDriveStateFromProps data={this.state.value}/>
           </>
        )
    }
}
export default SecondCompOfGDSFP;