import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
 //hame ye params type batayega ki vo kis type ka hai 
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

//Ab agar param ko type me change milega to ye is getData ko call kara dega
    useEffect(() => {
        getData()
    }, [type])


    const getData = () => {
    //yha agar ise type ka value milta hai to ye us type ki value ko show karega otherwise popular ko show karega
        fetch(`https://api.themoviedb.org/3/movie/ ${type ? type : "popular"} ? api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            
            <div className="list__cards">
                {
                    movieList.map(movie => (
//yha hame map se movie milega jise hamne card ke uder one by one put kr diya
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
