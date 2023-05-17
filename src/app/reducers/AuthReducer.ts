import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/AuthState';

const INIT_STATE:AuthState={
    token:"",
    message:""
}

export const authSlice = createSlice({
    
    name:'authItems',
    initialState:INIT_STATE,
    reducers:{
        
        RECIVE_AUTH_STATE:(state, action:PayloadAction<AuthState>)=>{
            state.message = action.payload.message;
            state.token = action.payload.token;
        }
               
    }
    
})

export const {RECIVE_AUTH_STATE} = authSlice.actions;

export default authSlice.reducer;