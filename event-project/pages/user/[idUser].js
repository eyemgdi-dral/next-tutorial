// import css from "./UserDetail.module.scss";

// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
function UserDetail(props) {
    return <div>UserDetail : {props.id}</div>;
}

export async function getServerSideProps(ctx) {
    const {idUser} = ctx.params;
    return {
        props: {
            id: idUser,
        },
    };
}
export default UserDetail;
