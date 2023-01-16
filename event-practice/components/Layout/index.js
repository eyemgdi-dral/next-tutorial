// import css from "./Layout.module.scss";
import Nav from "../Nav";
function Layout({children}) {
    return (
        <div>
            <Nav></Nav>
            {children}
        </div>
    );
}
export default Layout;
