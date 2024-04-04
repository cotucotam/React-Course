import React from "react";
export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor:""
        }
    )
    // function handleFirstNameChange(event){
    //     console.log(event.target.value)
    //     setFirstName(event.target.value)
    // }
    // function handleLastNameChange(event){
    //     console.log(event.target.value)
    //     setLastName(event.target.value)
    // }
    console.log(formData)
    // function handleChange(event){        
    //     setFormData(preFormData=>{
    //         return{
    //             ...preFormData,
    //             [event.target.name]:event.target.value
    //         }
    //     })
    // }
    function handleChange(event){
        const {name,value,type,checked}=event.target        
        setFormData(preFormData=>{
            return{
                ...preFormData,
                [name]: type ==="checkbox"? checked : value
            }
        })
    }
    function hanleSubmit(event){
        event.preventDefault()
        // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
        // submitToApi(formData)
        console.log(formData)
    }
    return(
        <form onSubmit={hanleSubmit}>
            <input 
                type="text" 
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                >
            </input>
            <input 
                type="text" 
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}>
                
            </input>
            <input 
                type="text" 
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formData.email}>
                
            </input>
            <textarea 
                value={formData.Comment}
                placeholder="Comments"
                onChange={handleChange}
                name="comments">
            </textarea>
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly">
                </input>
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>
            <fieldset>
                <legend>Current employment status</legend>
                <input type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment ==="unemployed"}
                    onChange={handleChange}>
                </input>
                <label htmlFor="unemployed">unemployed</label>
                <br/>
                <input type="radio"
                    id="parttime"
                    name="employment"
                    value="parttime"
                    checked={formData.employment ==="parttime"}
                    onChange={handleChange}>
                </input>
                <label htmlFor="parttime">part-time</label>
                <br/>
                <input type="radio"
                    id="fulltime"
                    name="employment"
                    value="fulltime"
                    checked={formData.employment ==="fulltime"}
                    onChange={handleChange}>
                </input>
                <label htmlFor="fulltime">full-time</label>
                <br/>
            </fieldset>
            <br/>
            <label htmlFor="favColor">what is your favorite color</label>
            <br/>
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor">
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="violet">violet</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>

        </form>
    )
}