import React from "react"; 
// import memesData from "./memesData";
export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [allMemes, setAllMemes] = React.useState([])
    let url
    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        // console.log(randomNumber)
        const url = memesArray[randomNumber].url
        // console.log(url)
        // setMemeImage(memesArray[randomNumber].url)
        setMeme(preMeme =>({
            ...preMeme,
            randomImage: url
        }))
    }
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    //         console.log("cotammmmmmmmmmmmm")
    //         // console.log(data.data.memes)
    // }, [])
    // React.useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data.data.memes)
    // }, [0])

    async function fetchProduct() {
        const response = await fetch("https://api.imgflip.com/get_memes") // Uses productId prop
        const json = await response.json();
        setAllMemes(json.data.memes);
      }

    React.useEffect(()=>{
        fetchProduct()
    }
    , [])

    function handleChange(event){
        const {name,value}=event.target
        setMeme(preMeme=>({
            ...preMeme,
            [name]:value
        }))
    }
    console.log(meme)
    return(
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}></input>
                <input 
                    className="form--input"
                    type="text" 
                    placeholder="Bottom text"  
                    name="bottomText"                  
                    value={meme.bottomText}
                    onChange={handleChange}></input>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}