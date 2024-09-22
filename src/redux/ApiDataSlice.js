import { createSlice } from "@reduxjs/toolkit";

const apiDataSlice = createSlice({
    name:"ApiData",
    initialState:{},
    reducers:{
        ApiData:(state , action)=>{
            console.log(action.payload)
            state = action.payload;
        }
    }
})

export const {ApiData} = apiDataSlice.actions;

export default apiDataSlice.reducer;