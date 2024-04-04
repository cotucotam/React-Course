import React from "react"
export default function Main(props){
    return(
        <main className={props.darkMode?"dark":""}>
            <h1>Fun facts about React</h1>
            <ul className="main--title">
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has Well over 100k stars on GitHub</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including modble apps</li>
            </ul>
        </main>
    )
}
