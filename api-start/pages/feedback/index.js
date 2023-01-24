import {useState} from "react";
import {bldPath, extractFeedback} from "../api/util";

//import css from './listFeedback.module.scss'
function listFeedback(props) {
    let feedbacks = props.feedbacks;
    const [feedback, setFeedback] = useState();

    function getDetail(id) {
        fetch(`/api/feedback/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                setFeedback(data.feedback);
            });
    }

    return (
        <div>
            <h1>List of Feedback</h1>
            <ul>
                {feedbacks.map((fb, idx) => (
                    <li key={idx}>
                        {fb.title}
                        <button onClick={getDetail.bind(null, fb.id)}>More</button>
                    </li>
                ))}
            </ul>

            {feedback && <h1>Selected feedback</h1>}
            {feedback && <div>{feedback.content}</div>}
        </div>
    );
}
export default listFeedback;

export async function getStaticProps() {
    const filePath = bldPath("feedback");
    const data = extractFeedback(filePath);
    return {props: {feedbacks: data}};
}
