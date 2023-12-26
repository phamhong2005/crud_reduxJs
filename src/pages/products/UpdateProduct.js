import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Update, updateForm} from "../../redux/services/productService";
import {Field, Form, Formik} from "formik";
import {GetAllCategory} from "../../redux/services/CategoryService";

export default function UpdateProduct() {
    const navigate = useNavigate();
    const category = useSelector(({categorys}) => {
        return categorys
    })
    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        console.log(products.productEdit)
        return products.productEdit
    })
    const {id} = useParams();
    useEffect(() => {
        dispatch(updateForm(id))
    }, []);
    useEffect(() => {
        dispatch(GetAllCategory())
    }, [])
    const Edit = (value)=>{
             dispatch(Update(value)).then(()=>{
                 navigate("/products/home")
             })

    }
    return (
        <>
            <Formik initialValues={product} onSubmit={Edit}
            enableReinitialize={true}>
                <Form>
                    {/*<Field name={"id"}></Field>*/}
                    <Field name={"name"}></Field>
                    <Field name={"description"}></Field>
                    <Field name={"image"}></Field>
                    <Field name={"price"}></Field>
                    <Field as={"select"} name={"category.id"} >
                        {category.list && category.list.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Field>
                    <button type={"submit"} >Sửa</button>
                </Form>
            </Formik>
        </>

    )

}