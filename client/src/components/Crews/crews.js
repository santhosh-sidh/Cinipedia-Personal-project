import React,{ useState , useEffect} from "react";
import './crews.css';
import { json, useNavigate } from "react-router-dom";


export function Crews(){

    const navigate = useNavigate();
    let industry = JSON.parse(localStorage.getItem("industry"));
    console.log(industry.industry_name)
    const[details,setDetails] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/crews.json")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    const Types=(value)=>() =>{
        localStorage.setItem("type",value);
        navigate('/crewDetails');
     }  

return(
    <>
    <div className="container-fluid">
        <div className="head text-center  text-light mt-3">
            <h1>{industry.industry_name}</h1>
        </div>
        <div className="row crewtotCard container-fluid  justify-content-around" id="cards">
                {details.map((value)=> (
                    <>
                        <div className="card crewcard bg-light mb-3 col-lg-5" onClick={Types(value.type)} >
                                <div className="card-body">
                                    <h5 className="card-title">{value.type}</h5>
                                </div>
                        </div>   
                    </>
                ))};
        </div>
    </div>
    </>
);
}