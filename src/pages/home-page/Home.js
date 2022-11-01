import React, { useEffect, useState } from "react"
import "./home.css"
// hamne yha react-responsive-carousel ko install kiya hai or use yha put kr diya
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from '../../component/MovieList/movieList';

const Home = () => {

    // useState ke thrue ham us API ko put karenge
    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    // Hamne yha setPopularMovie me is API ko call krwa diya
    }, [])

    return (
        <>
            <div className="poster">
            {/* yha hamne us carousel ko put kiya hai */}
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
   //hamne yha link pure carousel pr lagaya hai ki jab bhi koi kisi movie pr click kare to vo use uska main page par pahucha dega  matlab vo use movie.id ke path se link kar dega
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >

                                <div className="posterImage">
  //ye img me src me hamse pura path chahiye to hamne pehle TMDB ka path diya jisse ye uska poster show karega or uske bad Movie, and hamne uski API ki backdrop_path ko yha put kar diya
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>

                                <div className="posterImage__overlay">
//                 //yha ye posterImage_title me => Agar movie show ho rahi hai to ye uska original title show karega otherwise null                 
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    
 //yha ye posterImage_runtim me => Agar movie show ho rahi hai to ye uska release_date show karega otherwise null                 

                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}

                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
//ham yha ise put karne ke liye font awesome font link ko Index.js me import kiya hai
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>

                <MovieList />
                    
            </div>
        </>
    )
}

export default Home
