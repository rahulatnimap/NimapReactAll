// import { get } from 'react-hook-form';
import { create } from 'zustand';

const store = (set,get) => ({
     todolist : [],
     addTodoList : (newTodo) => {
        set((state) => ({
         todolist:  [...state.todolist , newTodo ],
        }))
     },
     addTodo : (Todo) => {
        set((state) => ({
            todo : state.Todo
        }))
     },
     doneTodo : (id) => {
            const list = get().todolist;
 
            const statusUpdate = list.map((ele) => {
                console.log('ele', ele)
            if(ele.id  == id) {
                return {
                    ...ele,
                    status : ele?.status === "Pending" ?  "Done" : "Pending"
                }
            }else return ele
        })
        console.log('statusUpdate', statusUpdate)
        set({
            todolist : statusUpdate
        })
     }
})


const todoList = create(store);

export default todoList;

