import React from "react";
import ReactDom from 'react-dom'
import 'bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// function App(){
//     return(
//         <div>
//             <h1>hello world</h1>
//             <h1>I love Nguyen</h1>
//         </div>
//     )
// }

// ReactDom.render(<App/>,document.getElementById('root'))

// const navbar = (
//     <nav>
//         <h1> Tran Co Tam</h1>
//         <ul>
//             <li>tran</li>
//             <li>Co</li>
//             <li>Tam</li>
//         </ul>
//     </nav>
// )
// ReactDom.render(navbar, document.getElementById('root'))
// document.getElementById("root").append(JSON.stringify(navbar))

// const page = (
//     <div>
//         <img src="./logo192.png" width="40px"></img>
//         <h1>fun fact about react</h1>
//         <ul>
//             <li>was first released in 2013</li>
//             <li>was orinally create by jondan wake</li>
//             <li>Has well over 100k stars on github</li>
//             <li>Is maintained by facebook</li>
//             <li>Power thousand of enterprise apps, including mobile apps</ li>
//         </ul>
//     </div>
// )
// ReactDom.render(page, document.getElementById("root"))

// function App(){
//     return(
//         <div>
//         <img src="./logo192.png" width="40px"></img>
//         <h1>fun fact about react</h1>
//         <ul>
//             <li>was first released in 2013</li>
//             <li>was orinally create by jondan wake</li>
//             <li>Has well over 100k stars on github</li>
//             <li>Is maintained by facebook</li>
//             <li>Power thousand of enterprise apps, including mobile apps</ li>
//         </ul>
//     </div>
//     )
// }
// ReactDom.render(<App/>, document.getElementById("root"))

// function App(){
//     return(
//         <div>
//             <header>
//                 <nav>
//                     <img src="./logo192.png" width="40px"></img>
//                 </nav>
//             </header>
//             <h1>Resons I'm excited to learn React</h1>
//             <ol>
//                 <li>I am happy</li>
//                 <li>I need money</li>
//             </ol>
//             <footer>
//                 <small>made by Tran Co Tam</small>
//             </footer>
//         </div>
//     )
// }
// ReactDom.render(<App/>, document.getElementById("root"))
function Header(){
    return(
        <header>
            <nav>
                <img src="./logo192.png" width="40px"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )   
}
function Footer(){
    return(
        <footer>
            <small>2022 Tran Co Tam development. All rights reserved</small>
        </footer>
    )
}
function MainContent(){
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
function Page(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDom.render(<Page/>, document.getElementById("root"))
