import Link from "next/link";

//import css from './List.module.scss'
function List({items, type}) {
    return (
        <ul>
            {items.map((product, idx) => (
                <li key={idx}>
                    {product.name}({product.qty} in Stock) - {product.price}$ <Link href={`/${type}/${product.id}`}>More...</Link>
                </li>
            ))}
        </ul>
    );
}
export default List;
