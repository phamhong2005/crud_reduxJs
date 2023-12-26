import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetAllCategory} from "../../redux/services/CategoryService";
import {Field, Formik, Form} from "formik";
import {add} from "../../redux/services/productService";
import {useNavigate} from "react-router-dom";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = useSelector(({categorys}) => {
        return categorys
    })
    useEffect(() => {
        dispatch(GetAllCategory())
    }, [])
    const Create =  value => {
       dispatch(add(value)).then(()=>{
           navigate("/products/home")
       })
    }


    return (
        <>
            <h1> ADD </h1>
            <Formik initialValues={{
                id: '',
                name: '',
                description: '',
                image: '',
                price: '',
                category: {
                    id: ''
                }
            }}

                    onSubmit={Create}
            >
                <Form>
                    <Field name={"id"} placeholder={"Id"}/>
                    <Field name={"name"} placeholder={"Name"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <Field name={"image"} placeholder={"Ảnh"}/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <Field as={"select"} name={"category.id"}>
                        {category.list && category.list.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Field>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}
export default AddProduct;