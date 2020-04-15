import React from "react"

function Component(props) {
    return (
        <div className="component" style={{backgroundColor: props.backgroundColor}}>
            <h2 style={{color: props.backgroundColor=="black" ? "white" : "black"}}>{props.title}</h2>
            <h3 style={{color: props.backgroundColor=="black" ? "white" : "black"}}>{props.subtitle}</h3>
            <p style={{color: props.backgroundColor=="black" ? "white" : "black"}}>{props.information}</p>
        </div>
    )
}

export default Component 