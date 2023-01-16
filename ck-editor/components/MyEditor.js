import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import React, {useState} from "react";
import {htmlToText} from "html-to-text";

const MyEditor = ({value, onChange, limit}) => {
    const [strVal, setStrVal] = useState("");
    const handleChange = (event, editor) => {
        let html = editor.getData();
        let plain = htmlToText(html);
        let cnt = new Blob([plain]).size;

        let cnt2 = new TextEncoder().encode(plain).length;
        console.log(plain, cnt, cnt2);

        if (cnt > limit) {
            console.log("limit exceeded");
            setStrVal(strVal);
            editor.setData(strVal);
        } else {
            setStrVal(html);
        }

        onChange(plain);
    };
    return <CKEditor editor={ClassicEditor} data={value} onChange={handleChange} />;
};

export default MyEditor;
