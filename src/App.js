import './App.css';
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/* import About from './components/About'; */
import Alert from './components/Alert';
//Test deploy
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; */

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
    setAlert(null);
    },1500)
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","Success")
      document.title = "TextUtils - Home Dark mode"
      setInterval(()=>{
        document.title = "Install this software"
      },1000)
      setInterval(()=>{
        document.title = "Your computer at risk"
      },2000)
    }else {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","Success")
      document.title = "TextUtils - Home Light mode"
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={togglemode}/>
    {/* <Router> */}
    {/* <Navbar titleText="TextUtils1" aboutText="About us"/> */}   
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your text to analyse"/>
      {/* <Routes> */}
         {/* <Route exact path="/about" element={<About/>}/> */}
         {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyse"/>}/> */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
