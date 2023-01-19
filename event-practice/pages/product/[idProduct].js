import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Product as api} from "../api/products";

//import css from './ProductDetail.module.scss'
function ProductDetail() {
    const router = useRouter();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!router.isReady) return;

        fetchData();
    }, [router.isReady]);

    const fetchData = () => {
        let idProduct = router.query.idProduct;

        fetch(`https://meetup-ce29d.firebaseio.com/product/${idProduct}.json`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
    };

    if (product) {
        return (
            <div>
                <Head>
                    <title>Detail page</title>
                    <meta name="description" content="Detail page for event"></meta>
                </Head>
                Product Detail
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return <div>No product</div>;
}

export default ProductDetail;
