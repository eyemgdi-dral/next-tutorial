import {useRef} from "react";

//import css from './NewsletterCreate.module.scss'
function NewsletterCreate() {
    const name = useRef();
    const email = useRef();
    const content = useRef();

    function submit(e) {
        e.preventDefault();
        const newsletter = {
            name: name.current.value,
            email: email.current.value,
            content: content.current.value,
        };

        fetch("/api/newsletter", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newsletter),
        }).then((res) => {
            console.log("res", res);
        });
    }

    return (
        <div>
            Create Newsletter
            <form action="newsletter" onSubmit={submit}>
                <div>
                    <label htmlFor="name">
                        Name
                        <input ref={name} type="text" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                        <input ref={email} type="text" />
                    </label>
                </div>
                <div>
                    <label htmlFor="content">
                        Content
                        <textarea ref={content}></textarea>
                    </label>
                </div>
                <button>Save</button>
            </form>
        </div>
    );
}
export default NewsletterCreate;
