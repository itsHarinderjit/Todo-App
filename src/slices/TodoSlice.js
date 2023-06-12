import { createSlice } from '@reduxjs/toolkit'

const getTodoList = () => {
    const localTodoList = window.localStorage.getItem('todoList')
    if(localTodoList) {
        return JSON.parse(localTodoList)
    }
    window.localStorage.setItem('todoList',JSON.stringify([]))
    return [];
}

const initialValue = {
    filterStatus : 'all',
    todoList : getTodoList()
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo(state,action){
            state.todoList.push(action.payload)
            const todolist = window.localStorage.getItem('todoList')
            if(todolist) {
                const todolistArr = JSON.parse(todolist)
                todolistArr.push({...action.payload})
                window.localStorage.setItem('todoList',JSON.stringify(todolistArr))
            }
            else {
                window.localStorage.setItem('todoList',JSON.stringify([{...action.payload}]))
            }
        },
        deleteTodo(state,action) {
            const todoList = window.localStorage.getItem('todoList')
            if(todoList) {
                const todoListArr = JSON.parse(todoList)
                todoListArr.forEach((todo,index)=>{
                    if(todo.id === action.payload) {
                        todoListArr.splice(index,1)
                    }
                    window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
                    state.todoList = todoListArr
                })
            }
        },
        updateTodo(state,action) {
            const todoList = window.localStorage.getItem('todoList')
            if(todoList) {
                const todoListArr = JSON.parse(todoList)
                todoListArr.forEach((todo,index)=> {
                    if(todo.id === action.payload.id) {
                        todo.title = action.payload.Title
                        todo.status = action.payload.Status
                    }
                })
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
                state.todoList = todoListArr
            }
        },
        updataFilterStatus(state,action) {
            state.filterStatus = action.payload
        }
    }
})

export const {addTodo,deleteTodo,updateTodo,updataFilterStatus} = TodoSlice.actions
export default TodoSlice.reducer