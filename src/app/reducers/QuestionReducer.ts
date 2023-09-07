import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Question, QuestionState} from '../../interfaces/QuestionState';

const INIT_STATE:QuestionState={
    questionLIst:[],
    isLoading:true
}

export const questionSlice = createSlice({
    
    name:'questionItems',
    initialState:INIT_STATE,
    reducers:{
        
        RECIVE_QUESTION_LIST_STATE:(state, action:PayloadAction<Question[]>)=>{
            state.questionLIst = action.payload;
            state.isLoading = false;
}
               
    }
    
})

export const {RECIVE_QUESTION_LIST_STATE} = questionSlice.actions;

export default questionSlice.reducer;