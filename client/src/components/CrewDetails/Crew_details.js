import React,{ useState , useEffect} from "react";
import './Crew_details.css';
import { useNavigate } from "react-router-dom";


export function CrewDetails(){
    const navigate = useNavigate();
    let a = localStorage.getItem("type");
    
    const[details,setDetails] = useState([])
    useEffect(()=>{
        let industry = JSON.parse(localStorage.getItem("industry"))
        let types = localStorage.getItem("type");
        console.log(industry,types)
        fetch("http://localhost:160/actorsdetails/"+industry.industry_code+'/'+types)
        .then(res=>res.json())
        .then(data=>setDetails(data.data))
        
    },[])
    const ActorName=(value)=>() =>{
        localStorage.setItem("ActorDetails",JSON.stringify(value));
        navigate('/ActorDetails');
     }  
return(

    <>
        <div className="container-fluid">
            <div className="head text-center  text-light mt-3">
                    <h1>{a}</h1>
            </div>
        </div>
        <div className="CDtotCard container text-center" id="cards">
            <div className="row justify-content-around">
                    {details.map((value)=> (
                    <>
                            <div className="card col-lg-3 mt-5 ml-3 CDCard " style={{width: '16rem'}}>
                                 <img src={value.Image} height = "300" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-title">{value.Actor_Name}</h3>
                                        <a href="#" className="btn btn-primary" onClick={ActorName(value)}>Show Details</a>
                                    </div>
                            </div>  
                    </>
                    ))};
            </div>
        </div>  
        
    </>
    );
}