import React, { useState , useEffect } from "react";
import './dashboard.css';
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const navigate = useNavigate();
    const[details,setDetails] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/dashboard.json")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    }, [])
     let Crews=(value)=>() =>{
        // alert(value);
        localStorage.setItem("industry",JSON.stringify(value));
        navigate('/crews');
     }  

    return (

        <>

            <div className="container-fluid">
                <div className="head text-center  text-light mt-3 mb-4">
                    <h1>INDUSTRIES</h1>
                </div>

                <div className="row DashtotCard container-fluid mr-4 justify-content-around " id="cards">
                
                            {details.map((value)=> (
                                <>
                                    <div className="card DashCard bg-light col-lg-5" onClick={Crews(value)} >
                                            <div className="card-body">
                                                <h5 className="card-title">{value.industry_name}</h5> 
                                            </div>
                                    </div>   
                                </>
                        ))};
                </div>
                </div>
        </>
    );
}