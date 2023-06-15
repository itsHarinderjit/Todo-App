import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../app/firebase'
import { query,collection, getDocs, setDoc,doc,deleteDoc,updateDoc } from 'firebase/firestore'

export const getTask = createAsyncThunk('todo/getTask',
    async (data) => {
        const q = query(collection(db,data.userId))
        const querySnapshot = await getDocs(q)
        let todolist = []
        querySnapshot.forEach((doc)=> {
            todolist.push({...doc.data()})
        })
        return todolist
    }
)

export const addTask = createAsyncThunk('todo/addTask',
    async (data) => {
        const todos = collection(db,data.userId)
        await setDoc(doc(todos,data.todo.id),data.todo)
        return data.todo
    }
)

export const deleteTask = createAsyncThunk('todo/deleteTask',
    async (data) => {
        await deleteDoc(doc(db,data.userId,data.id))
        return data.id
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
        await updateDoc(doc(db,data.userId,data.todo.id),newTodo)
        return data
    }
)

const initialValue = {
    filterStatus : 'all',
    colorMode : 'light',
    todoList : []
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
        },
        emptyTodoList(state,action) {
            state.todoList = []
        }
    },
    extraReducers: {
        [getTask.fulfilled.type] : (state,action) => {
            state.todoList = action.payload
        },
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

export const {updateFilterStatus,updateColorMode,emptyTodoList} = TodoSlice.actions
export default TodoSlice.reducer