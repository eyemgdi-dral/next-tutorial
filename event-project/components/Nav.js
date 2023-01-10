import Link from "next/link";
import css from "./Nav.module.scss";
function Nav() {
    return (
        <div className={css.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/event">Events</Link>
                </li>
                <li>
                    <Link href="/featured">Featured</Link>
                </li>
                <li>
                    <Link href="/product">Pre-rendering</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;
