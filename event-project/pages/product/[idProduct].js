import {useRouter} from "next/router";

// import css from "./ProductDetail.module.scss";
function ProductDetail() {
    function getProduct(pid) {}

    const router = useRouter();
    const idProduct = router.query.idProduct;
    const product = getProduct(idProduct);
    return <div>ProductDetail {idProduct}</div>;
}

// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), "./DUMMY_PRODUCT.json");
//     const jsonData = await fs.readFile(filePath);
//     const data = JSON.parse(jsonData);
//     product = data.filter((item) => item.id == pid);
//     return {
//         props: {
//             product: product,
//         },
//     };
// }

// export async function getStaticPaths() {
//     return {
//         paths: [{params: {idProduct: "1"}}, {params: {idProduct: "2"}}, {params: {idProduct: "3"}}],
//         fallback: false,
//     };
// }

export default ProductDetail;
