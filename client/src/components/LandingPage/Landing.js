import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import img1 from './images/peaky.jpg';
import img2 from './images/john.webp';
import img3 from './images/DC.jpg';


export function Landing(){
    return(
        <>
            <nav class="navbar navbar-light shadow">
      
            <h1 className="font-weight-bold  ml-5">CINIPEDIA</h1>
            <form className="form-inline">
            <Link to="/login"><button class="btn btn-success my-2 my-sm-0 mr-5" type="submit">LogIn</button></Link>
            </form>
            </nav>

         {/* <!-- carousel --> */}

         <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner carousels">
                <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>

            <div class="carousel-item carousels">
                <img src={img2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item carousels">
                <img src={img3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>

            <button className="carousel-control-prev raw" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next raw" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
        

        </>
    );
}
