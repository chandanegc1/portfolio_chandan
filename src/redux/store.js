import {configureStore} from "@reduxjs/toolkit";
import ApiDataSlice from "./ApiDataSlice";

const store = configureStore({
    reducer:{
        data:ApiDataSlice
    }
})

export default store;