import Nav from "./Nav";
function Layout(props) {
    return (
        <div>
            <Nav></Nav>
            {props.children}
        </div>
    );
}
export default Layout;
