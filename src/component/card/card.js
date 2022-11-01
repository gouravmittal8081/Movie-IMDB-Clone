// npm i react-loading-skeleton => hamne ye install kya haikyuki card me hame kuch alag hi effect add krna hai

import React, {useEffect, useState} from "react"
//jab ham kisi page ko refresh karenge to ye kuch time lega load hone ke liye isiliye hamne yaha ek pachage import kiya SKELETON
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {


    const [isLoading, setIsLoading] = useState(true)

//yha ye usLoading matlb jo car load ho rha hai skeleton se usko 1.5 second ke bad false kar dega
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
    //agar bo card load ho rha hai to ye condition run hogi
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        //jese hi ham car pr click karenge to ham uske ID pr pahuch jayenge
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
            //hamne yha cards_img me pehle uski API lagai then agar vo condition true hogi to movie ke path ko show karega
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards
