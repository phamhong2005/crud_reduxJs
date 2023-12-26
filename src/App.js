import Login from "./pages/users/Login";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {ListProduct} from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import UpdateProduct from "./pages/products/UpdateProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'products'} element={<Home/>}>
                    <Route path={"home"} element={<ListProduct/>}/>
                    <Route path={"add"} element={<AddProduct/>}/>
                    <Route path={":id"} element={<UpdateProduct/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
