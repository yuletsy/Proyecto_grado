import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CompanyState } from '../../interfaces/CompanyState';

const INIT_STATE:CompanyState={
    company:{},
    isLoading:false
}

export const comapanySlice = createSlice({
    
    name:'comanyItems',
    initialState:INIT_STATE,
    reducers:{
        
        RECIVE_COMPANY_STATE:(state, action:PayloadAction<any>)=>{
            state.company = action.payload;
            state.isLoading = false;
        }
               
    }
    
})

export const {RECIVE_COMPANY_STATE} = comapanySlice.actions;

export default comapanySlice.reducer;