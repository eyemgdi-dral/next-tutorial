import {useRouter} from "next/router";
import EventList from "../../components/EventList";
import {getEvent} from "../../DUMMY";

function Detail() {
    const router = useRouter();
    const id = router.query.id;
    const evt = getEvent(id);
    console.log("evt", evt);

    if (!evt) {
        return (
            <div>
                <h1>Detail</h1>
                <h1>No data</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Detail</h1>
            <EventList events={[evt]}></EventList>
        </div>
    );
}

export default Detail;
