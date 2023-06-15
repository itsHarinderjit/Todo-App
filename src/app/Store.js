import { configureStore} from '@reduxjs/toolkit'
import todoReducer from '../slices/TodoSlice'
import authReducer from '../slices/AuthSlics'

export const store = configureStore({
    reducer : {
        todo: todoReducer,
        auth: authReducer
    }},
);