import Link from "next/link";
// import css from "./Product.module.scss";
function Product() {
    return (
        <div>
            <h3>Product</h3>
            <Link href="/product/list">Go to List page</Link>
        </div>
    );
}
export default Product;
