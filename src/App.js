
import Navbar from './Navbar.js';
import Textform from './components/Text_form.js'
import './App.css';
import About from './components/About.js';
import React, {useState} from 'react'
import Alert from './components/alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// use htmlFor in place of for in jsx


// this is how i can use bootstrap on react.....

function App() {
  
const[mode,setmode] = useState('light')
const[alert,setalert] = useState(null)


const setmymode = ()=>{
  if(mode==='light')
  {setmode('dark');
  document.body.style.backgroundColor='#001f3a';
  showAlert("Dark mode has been enabled", "success")
   document.title = 'Dark-mode'   
  
  }

  else
  { 
    setmode('light');
   document.body.style.backgroundColor = 'white';
   showAlert("Light mode has been enabled","success")
  

    // it helped me in clearing the interval...............
    document.title = 'Light-mode'; 

  }
}




const showAlert = (message,type)=> {

  setalert({
          msg: message,
          type : type

  })

  setTimeout(() => {
    setalert(null)
  }, 1500);
  
}

  return (
    <>

{/* <Navbar title = "It's my yard" home = "my-sweet-home"/>  */}
 
{/* <Router> */}
<Navbar mode = {mode} setmymode = {setmymode}/> 
<Alert alertss = {alert}/>
            {/* <About />  */}
             

<div className = "container my-3">
    {/* here i need to write routes instead of switch*/}
      {/* <Routes> */}
           {/* this is a new syntax for latest version of react router */}
          {/* <Route path="/about" element={<About/>}> */}
            {/* </Route> */}

          {/* <Route path = "/" element = { <Textform showalert = {showAlert} heading = "Analyze your text here please!!" mode = {mode}/>}> */}
          {/* </Route> */}
            
          {/* </Routes> */}
          <Textform showalert = {showAlert} heading = "Analyze your text here please!!" mode = {mode}/>
          </div>
        {/* </Router> */}

    </>
  )
}
;

export default App;




// tasks
// 1. add some buttons of modes
// 2. write a javascript code to not consider a length of an empty string....
