import React from "react";

export default function MainContent(){
    return(
        <div>
            <h1>Resons I am funny</h1>
            <ol>
                <li>I am so funny</li>
                <li>I am so funny</li>
            </ol>
        </div>
    )
}
const nums = [1,2,3,4,5]
const squared = nums.map(function(item){
    return item*item
})
const names =["Tam","Nguyen","Co Tam"]
const Uppername = namse.map((name)=>{
    return name[0].toUpperCase() + name.slice(1)
})