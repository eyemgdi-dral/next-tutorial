import {useRouter} from "next/router";
import EventList from "../../components/EventList";
import {getEventFiltered} from "../../DUMMY";

function FilteredData() {
    const router = useRouter();
    const filter = router.query.filter;
    console.log("filter", filter);

    if (!filter) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    const year = filter[0];
    const month = filter[1];

    var arr = getEventFiltered({year, month});

    return (
        <div>
            <h1>
                dada FilteredData for {year} / {month}
                <EventList events={arr}></EventList>
            </h1>
        </div>
    );
}

export default FilteredData;
