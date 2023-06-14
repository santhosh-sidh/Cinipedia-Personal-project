import logo from './logo.svg';
import './App.css';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Crews } from './components/Crews/crews';
import { CrewDetails } from './components/CrewDetails/Crew_details';
import { ActorDetails } from './components/ActorDetails/ActorDetails';
import { Landing } from './components/LandingPage/Landing';


function App(){
  return (
    <>
    {/* <Login/> */}
    
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element ={<FrontUI/>}></Route> */}
      <Route path="/" element ={<Landing/>}></Route>
      <Route path="/Register" element ={<Register/>}></Route>
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/dashboard1" element = {<Dashboard/>}></Route>
      <Route path='/crews' element = {<Crews/>}></Route>
      <Route path='/crewDetails' element = {<CrewDetails/>}></Route>
      <Route path='/ActorDetails' element = {<ActorDetails/>}></Route>

      
     
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
