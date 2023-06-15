import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {auth,provider} from '../app/firebase'
import { signInWithPopup } from "firebase/auth";

export const signInUser = createAsyncThunk('Auth/signInUser',
    async ()=> {
        const data = await signInWithPopup(auth,provider)
        console.log(data)
        return data.user.uid
    }
)

export const signOutUser = createAsyncThunk('Auth/signOutUser',
    async ()=> {
        await auth.signOut()
        return true
    }
)

const initialValue = {
    isLogedIn: false,
    authId: ''
}

export const authSlice = createSlice( {
    name: 'Auth',
    initialState: initialValue,
    reducers: {

    },
    extraReducers: {
        [signInUser.fulfilled.type] : (state,action) => {
            state.authId = action.payload
            state.isLogedIn = true
        },
        [signInUser.rejected.type] : (state,action) => {
            console.log('sed')
        },
        [signOutUser.fulfilled.type] : (state,action) => {
            state.authId = ''
            state.isLogedIn = false
        },
        [signOutUser.rejected.type] : (state,action) => {
            console.log('sed')
        }
    }
}
)

// export const {signInUser} = authSlice.actions
export default authSlice.reducer