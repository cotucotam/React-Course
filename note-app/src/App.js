import React from 'react';
import './App.css';
import Main from './components/Main';
import { nanoid } from 'nanoid'
import Navbar from './components/Navbar';
const id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevDarkMode=>!prevDarkMode)
  }
  return (
    <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Main darkMode={darkMode}/>
    </div>
       );
}

export default App;
