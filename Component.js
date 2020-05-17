import React from "react"

function Component(props) {
    // your intenstion is to have conditional style
    // then It would be advisable to write the following code as
    const acceptableBackGroundColors = ["brown", "green", "blue"];
    const customColor = acceptableBackGroundColors.includes(props.backgroundColor) ? props.backgroundColor : "red"
    
    // if you can reduce the code duplications that would be a great improvement.
    // as if you change the logic then you will need to repeat it.
    // code duplications oe business logic duplication 
    //is one of the main cause of bugs in an applications

    return (
        <div className="component" style={{backgroundColor: props.backgroundColor}}>
            <h2 style={{color:customColor}}>{props.title}</h2>
            <h3 style={{color:customColor}}>{props.subtitle}</h3>
            <p style={{color:customColor}}>{props.information}</p>
        </div>
    
        
    )
}

export default Component 