import Raact from "react"
import { useState } from "react"
function Calculator() {
    const [state, setstate] = useState("")
    const btnHandler = (e) => {
        setstate(state.concat(e.target.value))

    }
    const clearHandler = () => {
        setstate(state.slice(0, state.length - 1))

    }
    const AllClear = () => {
        setstate("")
    }
    const SolveHandler = () => {
        try {
            setstate(eval(state).toString())
        } catch (err) {
            setstate("ERROR")
        }
    }
    const sqrHandler=()=>{
        setstate((state*state).toString());
    }
    return (
        <table border="1">
            <tr>
                <td colSpan="3"><input value={state} /></td>
                <td><input type="button" value="clear" onClick={clearHandler} /></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onClick={btnHandler} /></td>
                <td><input type="button" value="2" onClick={btnHandler} /></td>
                <td><input type="button" value="3" onClick={btnHandler} /></td>
                <td><input type="button" value="C" onClick={AllClear} /></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onClick={btnHandler} /></td>
                <td><input type="button" value="5" onClick={btnHandler} /></td>
                <td><input type="button" value="6" onClick={btnHandler} /></td>
                <td><input type="button" value="-" onClick={btnHandler} /></td>
            </tr>
            <tr>
                <td><input type="button" value="7" onClick={btnHandler} /></td>
                <td><input type="button" value="8" onClick={btnHandler} /></td>
                <td><input type="button" value="9" onClick={btnHandler} /></td>
                <td><input type="button" value="+" onClick={btnHandler} /></td>
            </tr>
            <tr>
                <td><input type="button" value="0" onClick={btnHandler} /></td>
                <td><input type="button" value="*" onClick={btnHandler} /></td>
                <td><input type="button" value="/" onClick={btnHandler} /></td>
                <td><input type="button" value="=" onClick={SolveHandler} /></td>
            </tr>
            <td><input type="button" value="sqr" onClick={sqrHandler} /></td>


        </table>
    )
}
export default Calculator;