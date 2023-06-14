import React from "react";
import './login.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export function Login(){
    const navigate = useNavigate();
    const Validate1 = async(event)=>{
        event.preventDefault();
        var userName = document.getElementById("username").value;
        var passWord = document.getElementById("password").value;
        if(userName == ""){
            alert("Please fill username");
        }else if(passWord == ""){
            alert("Please fill the password");
        }else{
            let userLogin = {
             "email": userName,
             "password": passWord
            }
            console.log(userLogin);
            await axios.post("http://localhost:160/login",userLogin)
            .then((res) =>{
                console.log(res);
                if(res.data.userId){
                    alert(res.data.message);
                    navigate("/dashboard1")
                }else{
                    alert("User Not Found,Please Register...");
                }
            }).catch((err) => {
                console.log(err);
                alert()
            })
            document.getElementById("username").value="";
            document.getElementById("password").value="";
        }
    }

 return(
    <>
    <div className="container loginDiv">
    <form onSubmit={Validate1}>
      <h1>Login</h1>
      <label>Username:</label>
      <input type="text" id="username" name="username"/>
      <label>Password:</label>
      <input type="password" id="password" name="password"/>
      <div  className="text-center">
      <input type="submit" value="Login" className="loginbutton"/>
      <p className="mt-3">Create an Account<Link to="/Register"><span> SignUp?</span></Link></p>
      </div>
     
    </form>
  </div>
  {/* </div> */}
    </>
);
 }
