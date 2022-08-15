import React, { useEffect, useState } from 'react';

let baseUrl = "fakeapi"

export const Todos = () => {

    // useEffect(() => {
    //     fetch(`/${baseUrl}/getUsers`)
    //         .then(res => res.json())
    //         .then(data => console.log("data", data))
    // })

    let [data, setData] = useState([]);

    const addTodoHandler = () => {
        fetch(`/${baseUrl}/addTodos`, {
            method: "POST",
            body: { id: 1232, text: "hello daniyal" }
        }).then(res => {
            console.log("success", res)
        }).catch(error => {
            console.log("error addTodo", error)
        })

    }

    const getDataHandler = () => {
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => 
            setData(data.todos),    
            console.log("data", data))
    }

    return (
        <div>
            Hello from todos
            <br />
            <button onClick={addTodoHandler}>Add</button>
            <br />
            <button onClick={getDataHandler}>Get Todos</button>
            {
                JSON.stringify(data)
            }
        </div>
    );
}

export default Todos;