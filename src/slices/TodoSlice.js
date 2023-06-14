import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../app/firebase'
import { query,collection, getDocs, setDoc,doc,deleteDoc,updateDoc } from 'firebase/firestore'

export const addTask = createAsyncThunk('todo/addTask',
    async (todo) => {
        const todos = collection(db,'todos')
        await setDoc(doc(todos,todo.id),todo)
        return todo
    }
)

export const deleteTask = createAsyncThunk('todo/deleteTask',
    async (id) => {
        await deleteDoc(doc(db,'todos',id))
        return id
    }
)

export const updateTask = createAsyncThunk('todo/updateTask',
    async (data) => {
        const newTodo = {
            id : data.todo.id,
            title : data.Title,
            status : data.Status,
            time : data.todo.time
        }
        await updateDoc(doc(db,'todos',data.todo.id),newTodo)
        return data
    }
)

let todoArr = []
const q = query(collection(db,'todos'))
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc)=> {
    todoArr.push({...doc.data()})
})

const initialValue = {
    filterStatus : 'all',
    colorMode : 'light',
    todoList : todoArr
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        updateFilterStatus(state, action) {
            state.filterStatus = action.payload
        },
        updateColorMode(state,action) {
            state.colorMode = action.payload
        }
    },
    extraReducers: {
        [addTask.fulfilled.type] : (state,action) => {
            state.todoList.push(action.payload)
        },
        [addTask.rejected.type] : (state,action) => {
            console.log('sed')
        },
        [deleteTask.fulfilled.type] : (state,action) => {
            let todolist = state.todoList
            todolist.forEach((item,index)=> {
                if(item.id === action.payload) {
                    todolist.splice(index,1)
                }
            })
            state.todoList = todolist
        },
        [deleteTask.rejected.type] : (state,action) => {
            console.log('sed')
        },
        [updateTask.fulfilled.type] : (state,action) => {
            console.log("fulfilled")
            let todolist = state.todoList
            console.log(todolist)
            todolist.forEach((item)=> {
                if(item.id===action.payload.todo.id) {
                    item.title = action.payload.Title
                    item.status = action.payload.Status
                    console.log('inside')
                }
            })
            console.log(todolist)
            state.todoList = todolist
        },
        [updateTask.rejected.type] : (state,action) => {
            console.log('sed')
        }
    }
})

export const {addTodo,deleteTodo,updateTodo,updateFilterStatus,updateColorMode} = TodoSlice.actions
export default TodoSlice.reducer