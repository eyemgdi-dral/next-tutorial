import { getFeaturedEvents } from "./DUMMY";
import css from "./index.module.scss";
function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div className={css.home}>
            <h1>Home</h1>
            <ul>
                {featuredEvents.map((evt) => (
                    <li key={evt.id}>
                        <div className={css.card}>
                            <b>{evt.author}</b>
                            <br />
                            <img src={evt.download_url}></img>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
