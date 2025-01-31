import React, { useEffect, useState } from 'react'

const DisplayTodo = () => {

    const [todo, setTodo] = useState([]);
    const [addtodo, setAddtodo] = useState("");
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        if (!addtodo.trim()) return;
        if (Object.keys(editId).length) {
            const updatedTodo = todo.map((elemets) => {
                if (elemets.id === editId.id) {
                    return { ...elemets, todo: addtodo }
                }
                return elemets;
            })
            console.log("updated res:", updatedTodo)

            try {

                await fetch(`http://localhost:3000/todos/${editId.id}`,
                    {
                        method: "PUT"
                        ,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ...editId , todo : addtodo })
                    }
                )
                setTodo(updatedTodo);
                setAddtodo("");
                setEditId({})

            } catch (error) {
                alert(error)
            }

        } else {
            let newtodo = {
                id: String(todo.length + 1),
                todo: addtodo,
                completed: false,
                userId: Date.now()
            }

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
    }

    async function handleDelete(item) {
        console.log(item);
        
        const todoupdate = todo.filter((items) => items.id !== item);

        await fetch(`http://localhost:3000/todos/${item}`,
            {
                method: "DELETE"
                ,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        setTodo(todoupdate);
        

    }

    function handleEdit(item) {
        setAddtodo(item.todo)
        setEditId(item)
    }

    async function handleCompleted(item) {
        console.log(item);
        
        const updatedTodo = todo.map((elemets) => {
            if (elemets.id === item.id) {
                console.log(elemets);
                
                return { ...elemets, completed: !elemets.completed }
            }
            return elemets;
        })
        console.log("updated res:", updatedTodo)
        
        
        await fetch(`http://localhost:3000/todos/${item.id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ ...item ,  completed : !item.completed })
        })
        setTodo(updatedTodo)
        console.log(item.completed);

    }


    async function fetchTodo() {
        try {
            setLoading(false)
            const response = await fetch("http://localhost:3000/todos");
            const data = await response.json();
            // console.log("data", data)
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
            {loading ? <ul>{todo?.map((item, index) => (<li
                key={index}
                style={{ textDecoration: !item.completed ? "none" : "line-through" }} >
                {item.todo}
                <button onClick={() => handleDelete(item.id)}>
                    Delete</button>
                <button onClick={() => handleEdit(item)}>
                    Edit</button>
                <button onClick={() =>{  handleCompleted(item)}}>
                    Completed</button></li>))}
            </ul>
                : <h1>Loading...</h1>}</div>
    )
}

export default DisplayTodo