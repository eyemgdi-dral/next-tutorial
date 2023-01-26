import {createContext, useState} from "react";
const NotificationCtx = createContext({
    notification: null, // {title,message,status}
    showNotification: function name(params) {},
    hideNotification: function name(params) {},
});

export function NotificationCtxProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    return <NotificationCtx.Provider value={context}>{props.children}</NotificationCtx.Provider>;
}

export default NotificationCtx;
