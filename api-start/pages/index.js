import Head from "next/head";
import {useEffect, useState} from "react";

//import css from './Home.module.scss'
function Home() {
    console.log("rerendered");

    const [arr, setArr] = useState([
        {checked: true, name: "item1", id: 1},
        {checked: false, name: "item2", id: 2},
    ]);

    function del() {
        setArr(arr.filter((item) => !item.checked));
        console.log("arr", arr);
    }

    function handleChange(item) {
        setArr([...arr.filter((itm) => item.id != itm.id), {...item, checked: !item.checked}]);
    }

    return (
        <div>
            <Head>
                <title>Api Route Start</title>
            </Head>
            Home
            <ul>
                {arr.map((item, idx) => (
                    <li key={idx}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleChange(item)} value={item.checked}></input>
                        {item.name}
                    </li>
                ))}
            </ul>
            <button onClick={del}>Delete</button>
        </div>
    );
}
export default Home;
