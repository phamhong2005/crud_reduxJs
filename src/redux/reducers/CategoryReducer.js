import {createSlice} from "@reduxjs/toolkit";
import {GetAllCategory} from "../services/CategoryService";
const initialState = {
    list : []
}
const CategorySlide = createSlice({
    name:"categorys",
    initialState,
    extraReducers : builder => {
        builder.addCase(GetAllCategory.fulfilled, (state, action)=>{
            state.list = action.payload
        })
    }

})
export default CategorySlide.reducer