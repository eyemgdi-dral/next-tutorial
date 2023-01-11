import fs from "fs/promises";
import path from "path";
//TIP: 'fs, path' заавал getStaticProps функз дотор байхгүй бол заадаг.
import EventList from "../../components/EventList";
import {getAllEvents} from "../../DUMMY";
// import css from "./ProductList.module.scss";
function ProductList() {
    const products = getAllEvents();
    return (
        <div>
            <h2>ProductList</h2>
            <EventList type="product" events={products}></EventList>
        </div>
    );
}

export async function getStaticProps() {
    //TIP 'fs, path' заавал энэ функз дотор байхгүй бол заадаг. dont know the reason for sure
    const filePath = path.join(process.cwd(), "./DUMMY_PRODUCT.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    // if (!false) {
    //     console.log("redirecting");
    //     return {redirect: {destination: "/no-product"}};
    // }

    // if (!(data.length > 0)) {
    //     return {notFound: true};
    // }

    return {
        props: {
            products: data,
        },
        revalidate: 10,
        redirect: "/",
    };
}

export default ProductList;
