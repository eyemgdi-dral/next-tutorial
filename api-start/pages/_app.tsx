import "../styles/globals.css";
import Layout from "../components/Layout";
import type {AppProps} from "next/app";
import {NotificationCtxProvider} from "../store/notefication-ctx";

export default function App({Component, pageProps}: AppProps) {
    return (
        <NotificationCtxProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NotificationCtxProvider>
    );
}
