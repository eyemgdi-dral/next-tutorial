import {useRef} from "react";

//import css from './Feedback.module.scss'
function Feedback() {
    const ipTitle = useRef();
    const ipContent = useRef();

    function submit(e) {
        e.preventDefault();
        const title = ipTitle.current.value;
        const content = ipContent.current.value;
        console.log("title", title);
        fetch("/api/feedback", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({title, content}),
        });
    }

    return (
        <div>
            <h3>Feedback</h3>
            <form action="feedback">
                <div>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" ref={ipTitle} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" row="5" ref={ipContent}></textarea>
                </div>
                <button onClick={submit}>Save</button>
            </form>
        </div>
    );
}
export default Feedback;
