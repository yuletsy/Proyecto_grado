import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {QuestionState} from '../../interfaces/QuestionState';

const INIT_STATE:QuestionState={
    idPreguntas: 0,
    idActividades: 0,
    nombre:""
}

export const authSlice = createSlice({
    
    name:'authItems',
    initialState:INIT_STATE,
    reducers:{
        
        RECIVE_AUTH_STATE:(state, action:PayloadAction<QuestionState>)=>{
            state.nombre = action.payload.nombre;
            state.idActividades = action.payload.idActividades;
            state.idPreguntas = action.payload.idPreguntas;
        }
               
    }
    
})

export const {RECIVE_AUTH_STATE} = authSlice.actions;

export default authSlice.reducer;