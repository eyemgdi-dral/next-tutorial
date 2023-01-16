// import css from "./Product.module.scss";
import {useEffect, useState} from "react";
import List from "../../components/List";
import {Product as api} from "../api/products";

function Product(props) {
    const type = "product";
    const [products, setProducts] = useState(props.products);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.getAll().then((res) => {
            setProducts(res);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h3>Product</h3>
            <List {...{type, items: products}}></List>
        </div>
    );
}

export async function getStaticProps() {
    let products = [];

    await api.getAll().then((res) => {
        products = res;
    });

    return {
        props: {
            products,
        },
    };
}

export default Product;
