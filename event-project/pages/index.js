import EventList from "../components/EventList";
import {getFeaturedEvents} from "../DUMMY";
import css from "./index.module.scss";
function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div className={css.home}>
            <h1>Home</h1>
            <EventList events={featuredEvents}></EventList>
        </div>
    );
}

export default Home;
