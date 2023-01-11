import css from "./EventList.module.scss";
import EventListItem from "./EventListItem";
function EventList({events, type}) {
    return (
        <div className={css.eventList}>
            <ul>
                {events.map((evt, idx) => (
                    <EventListItem type={type} key={idx} evt={evt} className={css.card}></EventListItem>
                ))}
            </ul>
        </div>
    );
}
export default EventList;
