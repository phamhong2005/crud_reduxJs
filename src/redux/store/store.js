import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/CategoryReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
        categorys:categoryReducer
    }
});
export default store;