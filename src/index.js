import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Card from "./Card.js";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(
    <div>
        <Card
            id={robots[0].id}
            name={robots[0].username}
            email={robots[0].email}
        />
        <Card
            id={robots[1].id}
            name={robots[1].username}
            email={robots[1].email}
        />
        <Card
            id={robots[2].id}
            name={robots[2].username}
            email={robots[2].email}
        />
        <Card
            id={robots[3].id}
            name={robots[3].username}
            email={robots[3].email}
        />
        <Card
            id={robots[4].id}
            name={robots[4].username}
            email={robots[4].email}
        />
        <Card
            id={robots[5].id}
            name={robots[5].username}
            email={robots[5].email}
        />
        <Card
            id={robots[6].id}
            name={robots[6].username}
            email={robots[6].email}
        />
        <Card
            id={robots[7].id}
            name={robots[7].username}
            email={robots[7].email}
        />
    </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
