import React from "react";
class Calclass extends React.Component{
    constructor(){
        super();
        this.state={
            expresion:""
        }
    }
     btnHandler=(e)=>{
         this.setState({expresion:this.state.expresion.concat(e.target.value)})
         console.log(this.state.expresion)
     }
   SolveHandler=()=>{
       this.setState({expresion:(eval(this.state.expresion)).toString()})
   }
   clearHandler=()=>{
       this.setState({expresion:this.state.expresion.slice(0,this.state.expresion.length-1)})
       
   }
   AllClear=()=>{
       this.setState({expresion:""})
   }


    render(){
        return (
            <table border="1">
                <tr>
                    <td colSpan="3"><input value={this.state.expresion} /></td>
                    <td><input type="button" value="clear" onClick={this.clearHandler} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="1" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="2" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="3" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="C" onClick={this.AllClear} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="4" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="5" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="6" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="-" onClick={this.btnHandler} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="7" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="8" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="9" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="+" onClick={this.btnHandler} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="0" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="*" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="/" onClick={this.btnHandler} /></td>
                    <td><input type="button" value="=" onClick={this.SolveHandler} /></td>
                </tr>
    
    
            </table>
        )
    }
}
export default Calclass;