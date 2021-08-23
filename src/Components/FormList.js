import React from "react"
import { useState } from "react"
function Formlist() {
    const [state, setstate] = useState({
        name: "",
        email: "",
        number: ""
    })
    const [final, setFinal] = useState([])

    const Handler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        setstate({ ...state, [name]: value })

    }
    const btnHandler = () => {
        var newList = {
            id: new Date().getTime(),
            complete: true,
            Additem: state,
        }
        setFinal([...final, newList])
        console.log(final)
    }
    return (
        <div>
            <table>
                <tr>name---:<input id="one" type="text" value={state.name} name="name" onChange={Handler}></input></tr>
                <tr>email---:<input id="two" type="email" value={state.email} name="email" onChange={Handler}></input></tr>
                <tr>number---: <input id="three" type="number" value={state.number} name="number" onChange={Handler}></input></tr>
                <tr><button onClick={btnHandler}>Click me</button></tr>
            </table>
            {final.map((para) => {
                return (
                    <div key={para.id}>
                        <li>{para.Additem.name}</li>
                        <li>{para.Additem.email}</li>
                        <li>{para.Additem.number}</li>

                    </div>
                )

            })}
        </div>
    )
}
export default Formlist;