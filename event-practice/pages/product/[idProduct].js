import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Product as api} from "../api/products";

//import css from './ProductDetail.module.scss'
function ProductDetail() {
    const router = useRouter();
    let idProduct = router.query.idProduct;
    console.log("idProduct", idProduct);
    console.log("router.query", router.query);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        api.get(idProduct).then((res) => {
            console.log("res", res);

            setProduct(res);
        });
    }, []);

    if (!product) {
        return <div>No Product</div>;
    }

    return (
        <div>
            Product Detail for {idProduct}
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{product.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductDetail;
