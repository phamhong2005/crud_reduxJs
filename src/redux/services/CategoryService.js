import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllCategory = createAsyncThunk(
    'Category/GetAll',
    async ()=>{
        let res = await axios.get("http://localhost:8080/categories")
        return res.data
    }
)