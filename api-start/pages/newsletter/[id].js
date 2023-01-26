import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";

//import css from './NewsletterDetail.module.scss'

function NewsletterDetail() {
    const router = useRouter();
    const [newsletter, setNewsletter] = useState();
    const [comments, setComments] = useState([]);
    const [id, setId] = useState("");
    const content = useRef();

    useEffect(() => {
        const idTemp = router.query.id;
        setId(idTemp);

        fetch(`/api/newsletter/${idTemp}`)
            .then((res) => res.json())
            .then((res) => {
                setNewsletter(res.newsletter);
            });

        fetchComment(idTemp);
    }, [router.isReady]);

    function fetchComment(idTemp) {
        fetch(`/api/comment/${idTemp}`)
            .then((res) => res.json())
            .then((res) => {
                setComments(res.comments);
            });
    }

    function send() {
        const data = {
            content: content.current.value,
            idNewsletter: id,
        };
        fetch("/api/comment", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("res comment", res);
            fetchComment(id);
        });
    }

    return (
        <div>
            NewsletterDetail
            {newsletter && <div>{newsletter.content}</div>}
            <h2>Comments</h2>
            <div>
                <textarea ref={content}></textarea>
                <br />
                <button onClick={send}>Send</button>
            </div>
            <ul>{comments && comments.map((c, idx) => <li key={idx}>{c.content}</li>)}</ul>
        </div>
    );
}
export default NewsletterDetail;
