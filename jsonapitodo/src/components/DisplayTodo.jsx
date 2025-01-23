import React, { useEffect, useState } from 'react'

const DisplayTodo = () => {

    const [todo, setTodo] = useState([]);
    const [addtodo, setAddtodo] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false)
    // const maxuser = todo.reduce((cur, acc) => Math.max(cur, acc.userId), 0);



    async function handleSubmit(e) {
        e.preventDefault();
        if (!addtodo.trim()) return;
        let newtodo = {
            id: String(todo.length + 1),
            todo: addtodo,
            completed: false,
            userId: Date.now()
        }
        // console.log(newtodo);
        setAddtodo("")

        await fetch("http://localhost:3000/todos",
            {
                method: "POST"
                ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newtodo)
            }
        )
            .then((response) => response.json())
            .then((data) => setTodo([...todo, data]))

    }

    async function handleDelete(index){
       const todoupdate =  todo.filter((item) => item.id !==index );

       await fetch("http://localhost:3000/todos",
        {
            method: "POST"
            ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoupdate)
        }
    )
        .then((response) => response.json())
        //.then((data) => console.log(data))
        .then((data) => setTodo([data]))
        //console.log("response")
    }




    async function fetchTodo() {
        try {
            setLoading(false)
            const response = await fetch("http://localhost:3000/todos");
            const data = await response.json();
            console.log("data",data)
            setTodo(data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchTodo();
    }, [])


    return (
        <div>
            <h1>Todo List From api</h1>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(e) => setAddtodo(e.target.value)} value={addtodo} type="text" name="" id="" />
                <button type='submit' >Add Todo</button>
            </form>
            {loading ? <ul>{todo?.map((item) => (<li key={item.id} style={{textDecoration :  !item.completed ? "none" : "line-through"}} >{item.todo} <button onClick={handleDelete}>Delete</button></li> ))}</ul> : <h1>Loading...</h1>}</div>
    )
}

export default DisplayTodo