import Link from "next/link";

function EventListItem({evt, className, type}) {
    return (
        <li key={evt.id}>
            <div className={className}>
                <b>{evt.author}</b>
                <br />
                <img src={evt.download_url}></img>
            </div>
            <Link href={`/${type ? type : "event"}/${evt.id}`}>more</Link>
        </li>
    );
}
export default EventListItem;
