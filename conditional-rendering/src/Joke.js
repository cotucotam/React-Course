import React from "react";
export default function Joke(props){
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        console.log("clicked")
        setIsShown(preIsShow=>!preIsShow)
    }
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {/* {!isShown && <button onClick={toggleShown}>Shown punchline</button>}
            {isShown && <button onClick={toggleShown}>Hide punchline</button>} */}
            <button onClick={toggleShown}>{isShown? "Hide":"shown"} punchline</button>
            
            <hr />
        </div>
    )
}