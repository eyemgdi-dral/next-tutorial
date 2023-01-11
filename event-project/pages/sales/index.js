import {useEffect, useState} from "react";
import useSWR from "swr";
// import css from "./Sales.module.scss";
// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
function Sales(props) {
    const [sales, setSales] = useState(props.sales);

    const {data, error, isLoading} = useSWR("https://meetup-ce29d.firebaseio.com/sale.json", (url) => fetch(url).then((res) => res.json()));

    useEffect(() => {
        if (data) {
            let temp = [];
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    temp.push({
                        id: key,
                        ...element,
                    });
                }
            }
            setSales(temp);
        }
        // fetch("https://meetup-ce29d.firebaseio.com/sale.json")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((response) => {

        //     });
    }, [data]);

    if (error) {
        return <h1>Error</h1>;
    }

    if (!data && !sales) {
        return <h1>data error</h1>;
    }

    return (
        <div>
            <h3>Sales</h3>
            <ul>
                {sales.map((sale, idx) => (
                    <li key={idx}>
                        {sale.user}: {sale.qty}qty
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    let sales = [];
    await fetch("https://meetup-ce29d.firebaseio.com/sale.json")
        .then((res) => res.json())
        .then((response) => {
            let temp = [];
            for (const key in response) {
                if (Object.hasOwnProperty.call(response, key)) {
                    const element = response[key];
                    temp.push({
                        id: key,
                        ...element,
                    });
                }
            }
            sales = temp;
        });

    return {props: {sales}};
}
export default Sales;
