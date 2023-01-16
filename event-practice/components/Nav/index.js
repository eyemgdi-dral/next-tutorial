import Link from "next/link";

// import css from './Nav.module.scss'
function Nav() {
    return (
        <ul>
            <li>
                <Link href="/product">Product</Link>
            </li>
            <li>
                <Link href="/event">Event</Link>
            </li>
        </ul>
    );
}
export default Nav;
