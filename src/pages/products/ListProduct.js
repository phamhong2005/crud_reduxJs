import {useDispatch, useSelector} from "react-redux";
import {Delete, getAll, search} from "../../redux/services/productService";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    });

    useEffect(() => {
        dispatch(getAll());
    }, [])
    const remove = (id) => {
        dispatch(Delete(id))
    }
    const searchName = (value) => {
        dispatch(search(value.nameSearch))
    }
    return (
        <>
            <h1>List Product</h1>
            <Formik initialValues={
                {
                    nameSearch: ""
                }
            }
                    onSubmit={searchName}>
                <Form>
                    <Field name={"nameSearch"}></Field>
                    <button type={"submit"}>Search</button>
                </Form>

            </Formik>
            {
                products.map((item) => (
                    <>
                        <h3>Name: {item.name} - Image: <img src={item.image} alt={"#"}
                                                            style={{width: "100px", height: "100px"}}/></h3>
                        <Link to={"/products/" + item.id}>
                            <button>Sửa</button>
                        </Link>
                        <button onClick={() => {
                            remove(item.id)
                        }}>Xóa
                        </button>
                    </>
                ))
            }

        </>
    )
}