import React from "react";
import Card from "./Card";

const CardList = ({info, usersTimedOut}) => {
    if (usersTimedOut && info.length === 0) {
        return <h1>Loading failed, getting offline users</h1>
    } else if (info.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div>
                {
                    info.map((user, i) => {
                        return (<Card key={i} id={info[i].id} username={info[i].username} email={info[i].email}/>);
                    })
                }
            </div>
        );
    }
}

export default CardList;