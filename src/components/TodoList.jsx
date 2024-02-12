import React from "react";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';




const TodoList = () => {

    const [input, setInput] = useState("")
    const [text, setText] = useState([])

    const AddItem = () => {
        if (input) {
            setText([...text, input])
            setInput("")

        } else {
            alert("Please enter the data")
        }


    }

    const del = (id) => {
        const updatItem = text.filter((data, ind) => {
            return ind !== id
        })
        setText(updatItem)

    }
    return (
        <div className="main-container">
            <h1 className="heading">Add ToDo-List</h1>
            <div className="input">
                <input type="text" value={input} name={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={AddItem}>ADD</button>
            </div>
            <div className="list">
                <ul>
                    {text.map((data, ind) => {
                        return (
                            <div key={ind}>
                                <li>{data}<p onClick={() => del(ind)}><DeleteIcon/></p></li>
                            </div>
                        )
                    })}
                </ul>


            </div>

        </div>
    )
}

export default TodoList;