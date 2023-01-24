import {useEffect, useState} from "react";

function Newsletter() {
    const [newsletters, setNewsletters] = useState([]);

    useEffect(() => {
        fetch("/api/newsletter")
            .then((res) => res.json())
            .then((res) => {
                console.log("res", res);

                setNewsletters(res.newsletters);
            });
    }, []);
    return (
        <div>
            Newsletters
            <ul>
                {newsletters.map((nl, idx) => (
                    <li key={idx}>{nl.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Newsletter;
