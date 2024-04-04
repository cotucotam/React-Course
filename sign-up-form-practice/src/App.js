// import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [formData, setFormData] = React.useState({
    email:"",
    password:"",
    passwordConfirm:"",
    joinedNewsletter:true
  })
  function handleChange(event){
    const {name, value,type, checked} = event.target
    setFormData(preFormData=>({
      ...preFormData,
      [name]: type ==="checkbox"?checked:value
    }))
  } 
  console.log(formData)
  function handleSubmit(event){
    // event.prevenDefault()
    if(formData.password ===formData.passwordConfirm){
      console.log("match")
    }else{
      console.log("not match")
      return
    }
    if(formData.joinedNewsletter){
      console.log("tks")
    }
  }
  return (
<div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="joinedNewsletter"
                        value={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
  );
}

export default App;
      