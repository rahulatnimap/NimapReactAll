import React, { useEffect, useState } from 'react'
import todoList from '../../store/Zustand/ZustandStore'
import { formateDate } from '../../utils/contains'

const ContactUs = () => {
  const todoString = todoList(state => state.todo)
  const updateS = todoList(state => state.doneTodo)
  const addTodoList = todoList(state => state.addTodoList)
  const todos = todoList(state => state.todolist);
  const [str , setStr] = useState('')
  const handleSubmit = (e) => {
    console.log("asdfyus" , str)
    e.preventDefault();
        addTodoList({
          todo : str,
          id : Date.now(),
          status : "Pending",
        })
  }
  return (
    <>
    <form onSubmit={handleSubmit} action="">
    <input value={str}  onChange={(e) =>  setStr(e.target.value)}/>
    <button type='submit'>Click</button>
    </form>

    <div>
      {
        todos.map((ele) => (
          <table>
            <tr>
              <th>Todo</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{ele?.todo}</td>
              <td>{ele?.status}</td>
              <td>{formateDate(ele?.id)}</td>
              <td><button onClick={() => updateS(ele?.id) }>Update</button></td>
            </tr>
          </table>
        ))
      }
    </div>

    </>
  )
}

export default ContactUs