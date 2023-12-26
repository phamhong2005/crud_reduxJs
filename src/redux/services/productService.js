import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:8080/products");
        return res.data;
    }
)

export const add = createAsyncThunk(
    'products/add',
     async (newProduct) => {
         let res = await axios.post("http://localhost:8080/products", newProduct);
         return res.data
     }
)
export const updateForm = createAsyncThunk(
    'products/editForm',
    async (id) => {
        let res = await axios.get("http://localhost:8080/products/" + id);
        return res.data
    }
)
export const Update = createAsyncThunk(
    'product/edit',
    async (productEdit) => {
        let res = await axios.put("http://localhost:8080/products/" + productEdit.id, productEdit)
        return res.data
    }
)
export const Delete = createAsyncThunk(
    'product/delete',
    async (id) => {
        await axios.delete("http://localhost:8080/products/" + id)
        return id
    }
)
export const search = createAsyncThunk(
    'product/search',
     async (nameSearch)=>{
        let listProduct =await axios.get("http://localhost:8080/products?name="+nameSearch)
        return listProduct.data
    }
)
