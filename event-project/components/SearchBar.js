import {useRouter} from "next/router";
import {useRef} from "react";
import css from "./SearchBar.module.scss";
function SearchBar() {
    const router = useRouter();
    const years = [2021, 2022, 2023, 2024];
    const months = [
        {nth: 1, name: "Jan"},
        {nth: 2, name: "Fed"},
        {nth: 3, name: "Mar"},
        {nth: 4, name: "Apr"},
        {nth: 5, name: "May"},
        {nth: 6, name: "Jun"},
        {nth: 7, name: "Jul"},
        {nth: 8, name: "Aug"},
        {nth: 9, name: "Sep"},
        {nth: 10, name: "Oct"},
        {nth: 11, name: "Nov"},
        {nth: 12, name: "Dec"},
    ];

    const yearInp = useRef();
    const monthInp = useRef();

    function search() {
        const year = yearInp.current.value;
        const month = monthInp.current.value;

        router.push(`/event/${year}/${month}`);
    }

    return (
        <div className={css.searchbar}>
            <select ref={yearInp}>
                {years.map((year, idx) => (
                    <option key={idx}>{year}</option>
                ))}
            </select>

            <select ref={monthInp}>
                {months.map((month, idx) => (
                    <option key={(month, idx)} value={month.nth}>
                        {month.name}
                    </option>
                ))}
            </select>

            <button onClick={search}>Search</button>
        </div>
    );
}
export default SearchBar;
