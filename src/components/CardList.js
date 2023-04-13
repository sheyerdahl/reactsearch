import React from "react";
import Card from "./Card";

const CardList = ({info}) => {
    return info.length === 0 ?
    <h1>Loading</h1> :
    (
        <div>
            {
                info.map((user, i) => {
                    return (<Card key={i} id={info[i].id} username={info[i].username} email={info[i].email}/>);
                })
            }
        </div>
    );
}

export default CardList;