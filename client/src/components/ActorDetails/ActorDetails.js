import React,{useEffect,useState} from "react";
import './ActorDetails.css'

 export function ActorDetails(){
    var actorDetail = JSON.parse(localStorage.getItem("ActorDetails"));
    return(
        <>
        <div className="text-light"><h1>{actorDetail.Actor_Name}</h1></div>
        {   
        <div className="card mb-3">
            <div className="row no-gutters shadow">
                <div className="col-md-6 ">
                    <img src={actorDetail.Image} alt="..." height="670px" width="100px" className="container"/>
                </div>
                <div className="col-md-6 container">
                    <div className="card-body Details">
                        <table>
                            <tr><td><th>Actor Name:</th></td><td>{actorDetail.Actor_Name}</td></tr>
                            <tr><td><th>NickName:</th></td><td>{actorDetail.NickName}</td></tr>
                            <tr><td><th>Actor Type:</th></td><td>{actorDetail.Actor_type}</td></tr>
                            <tr><td><th>Age:</th></td><td>{actorDetail.Age}</td></tr>
                            <tr><td><th>BirthPlace</th></td><td>{actorDetail.Birth_place}</td></tr>
                            <tr><td><th>Date of Birth:</th></td><td>{actorDetail.Date_of_birth}</td></tr>
                            <tr><td><th>Gender:</th></td><td>{actorDetail.Gender}</td></tr>
                            <tr><td><th>Father Name:</th></td><td>{actorDetail.Father_Name}</td></tr>
                            <tr><td><th>Mother Name:</th></td><td>{actorDetail.Mother_Name}</td></tr>
                            <tr><td><th>HomeTown:</th></td><td>{actorDetail.HomeTown}</td></tr>
                            <tr><td><th>Height:</th></td><td>{actorDetail.Height}</td></tr>
                            <tr><td><th>Weight:</th></td><td>{actorDetail.Weight}</td></tr>
                            <tr><td><th>EyeColour:</th></td><td>{actorDetail.EyeColour}</td></tr>
                            <tr><td><th>Zodiac sign:</th></td><td>{actorDetail.Zodiac_sign}</td></tr>
                            <tr><td><th>Nationality:</th></td><td>{actorDetail.Nationality}</td></tr>
                            <tr><td><th>Religion:</th></td><td>{actorDetail.Religion}</td></tr>
                            <tr><td><th>Film Debut:</th></td><td>{actorDetail.Film_debut}</td></tr>
                            <tr><td><th>Hobbies:</th></td><td>{actorDetail.Hobbies}</td></tr>
                            <tr><td><th>Fav_Actor:</th></td><td>{actorDetail.Fav_Actor}</td></tr>
                            <tr><td><th>Fav_Sports:</th></td><td>{actorDetail.Fav_Sports}</td></tr>
                            <tr><td><th>Salary:</th></td><td>{actorDetail.Salary}</td></tr>
                            <tr><td><th>Market Cap:</th></td><td>{actorDetail.Market_Cap}</td></tr>
                        </table>
        
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    );
    }