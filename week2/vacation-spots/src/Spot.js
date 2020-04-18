import React from "react";
import ReactDOM from "react-dom";
import VacationSpotsData from "./VacationSpotsData";
import "./index.css";

function Spot(props) {
    const styles = {
        backgroundColor: props.cardColor,   
    };

    return (
        <div id="spot" style={styles}>
            <h2 style={styles}>{props.place}</h2>
            <h3 style={styles}>{props.price}</h3>
            <p style={styles}>Best time to Go : {props.timeToGo}</p>
        </div>
    )
}

Spot.defaultProps = {
    cardColor: "orange"
}

export default Spot;
