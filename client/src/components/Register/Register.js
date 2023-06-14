import React from "react";
import './Register.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

 export function Register(){
  var navigate = useNavigate();
    let Validate =async (event)=>{
      event.preventDefault();
     
        var fname  = document.getElementById("fname").value;
        var lname  = document.getElementById("lname").value;
        var gender = document.getElementById("gen").value;
        var email  = document.getElementById("email").value;
        var val  = new RegExp(/^([a-z0-9]+)@([a-z]+)\.([a-z]{2,3})/);
        var valEmail = val.test(email);
        var dateOfBirth = document.getElementById("dateOfBirth").value;
           var myDate = new Date(dateOfBirth);
             var d = myDate.getDate();
            var m =  myDate.getMonth();
             m += 1;  
             var y = myDate.getFullYear();
             var newdate=(y+ "-" + m + "-" + d);
        var number = document.getElementById("phoneNumber").value;
        var phNum = new RegExp(/^[6-9][0-9]{9}/);
        var valNum = number.match(phNum);
        var password = document.getElementById("password").value;
        var cpassword = document.getElementById("confirm_password").value;
  
        if (fname == "") {
          alert("Please fill the firstname");
        } else if (lname == "") {
          alert("Please fill the Lastname");
        } else if (gender == "") {
          alert("Please fill the Gender");
        } else if (email == "" || valEmail == false) {
          alert("Please fill the email");
        } else if (newdate == "") {
          alert("Please fill the DateOfBirth");
        } else if (number == "" || valNum == null) {
          alert("Please fill the valid Phone Number");
        } else if (password == "") {
          alert("Please fill the password");
        } else if (cpassword == "") {
          alert("Please Confirm password");
        } else if (cpassword != password) {
          alert("Check the password");
        } else {
            let userInfo={
                "first_name" : fname,
                "last_name"  : lname,
                "gender"    : gender,
                "email"     : email,
                "dob": dateOfBirth,
                "phone_number"  : valNum,
                "password"  : cpassword
            }
            console.log(userInfo)
           await axios.post("http://localhost:160/addUserDetails",userInfo)
          .then((res) =>{
            console.log(res);
            alert("Registered Successfully,Go to login Page");
            navigate("/login")
            
        }).catch((err) => {
            console.log(err)
        })
        }
      
    }
    return(
        <>
        <div className="head">
        <div className="container RegDiv">
    <form onSubmit={Validate}>
      <h1>Registration</h1>
      <label>First Name:</label>
      <input type="text" id="fname" name="name"/>
      <label >Last Name:</label>
      <input type="text" id="lname" name="name"/>
      <label>Email:</label>
      <input type="email" id="email" name="email"/>
      <label>Date Of Birth:</label>
      <input type="date" id="dateOfBirth" name="dateOfBirth"/><br/>
      <label>Phone Number:</label>
      <input type="text" id="phoneNumber" name="username"/>
      <label>Gender:</label>
      <input type="text" id="gen" name="Gender"/>
      <label >Password:</label>
      <input type="password" id="password" name="password"/>
      <label >Confirm Password:</label>
      <input type="password" id="confirm_password" name="confirm_password"/>
      <input type="submit"  value="Register"/>
    </form>
  </div>
  </div>
        </>
    );
}