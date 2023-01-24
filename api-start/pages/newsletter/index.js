import Link from "next/link";
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
                    <li key={idx}>
                        {nl.name}
                        <Link href={`/newsletter/${nl.id}`}>
                            <button>More</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Newsletter;
