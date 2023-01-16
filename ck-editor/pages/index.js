import dynamic from "next/dynamic";
import {htmlToText} from "html-to-text";

function Home() {
    function mockFunc(val) {
        console.log("val", val);
    }

    const Editor = dynamic(() => import("../components/MyEditor"), {ssr: false});
    return (
        <div>
            <h2>Using CKEditor 5 build in React</h2>
            <Editor value={"Foo"} onChange={mockFunc} limit={5} />
        </div>
    );
}
export default Home;
