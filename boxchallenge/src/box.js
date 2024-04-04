import React from "react"
import boxes from "./boxes"
export default function Box(props){
    // const [on, setOn]=React.useState(props.on)
    // function toggle(){
    //     setOn(preOn=>!preOn)
    // }
    // const style={
    //     backgroundColor: on? "#222222":"#cccccc"
    // } 
    // console.log(props.on)
    const style={
        backgroundColor: props.on? "#222222":"#cccccc"}
    return(
        // <div onClick={()=>props.toggle(props.id)} style={style} className='box'></div>
        <div onClick={props.toggle} style={style} className='box'></div>

        )
}

