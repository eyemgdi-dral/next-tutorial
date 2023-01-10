import EventList from "../../components/EventList";
import SearchBar from "../../components/SearchBar";
import {getAllEvents} from "../../DUMMY";

function Event() {
    const arr = getAllEvents();
    return (
        <div>
            <h1>Event</h1>
            <SearchBar></SearchBar>

            <EventList events={arr}></EventList>
        </div>
    );
}

export default Event;
