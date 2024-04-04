import React from 'react';
import ReactDOM from "react-dom"
import user from "./image/user.jpg"
import Start from './Start';
function Main() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "trancotam@gmail.com",
    isFavorite: true
  })
  // let startIcon = contact.isFavorite ?startfull:startempty
  function toggleFavorite(){
    // setContact(prevContact =>{
    //     return{
    //         firstName: "John",
    //         lastName: "Doe",
    //         phone: "+1 (719) 555-1212",
    //         email: "trancotam@gmail.com",
    //         isFavorite: !prevContact.isFavorite
    //     }
    // })
    setContact(prevContact =>({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
  }
  return (
    <main>
      <article className='card'>
        <img src={user} className="card--image" alt='hinh 1'/>
        <div className='card--info'>
            <Start isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
            <h2 className='card--name'>
                {contact.firstName} {contact.lastName}
            </h2>
            <p className='card--contact'>{contact.phone}</p>
            <p className='card--contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default Main;
