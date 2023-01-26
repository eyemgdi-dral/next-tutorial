//import css from './Layout.module.scss'

import {useContext} from "react";
import NotificationCtx from "../store/notefication-ctx";

function Layout(props) {
    const notificationCtx = useContext(NotificationCtx);
    const notification = notificationCtx.notification;

    return (
        <div>
            Using layout{props.children}
            <div>
                Notification
                {notification && (
                    <table>
                        <tbody>
                            <tr>
                                <td>title</td>
                                <td>{notification.title}</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td>{notification.message}</td>
                            </tr>
                            <tr>
                                <td>status</td>
                                <td>{notification.status}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
export default Layout;
