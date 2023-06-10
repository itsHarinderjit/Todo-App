import { createSlice } from '@reduxjs/toolkit'

const getTodoList = () => {
    const localTodoList = window.localStorage.getItem('todoList')
    if(localTodoList) {
        return JSON.parse(localTodoList)
    }
}

const initialValue = {
    todoList : getTodoList()
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducer: {
        addTodo: (state,action)=> {
            state.todoList.push(action.payload)
            const todolist = window.localStorage.getItem('todoList')
            if(todolist) {
                const todolistArr = JSON.parse(todolist)
                todolistArr.push(...action.payload)
                window.localStorage.setItem('todoList',JSON.stringify(todolistArr))
            }
            else {
                window.localStorage.setItem('todoList',JSON.stringify([{...action.payload}]))
            }
        }
    }
})

export const {addTodo} = TodoSlice.actions
export default TodoSlice.reducer