import { getMovies } from "../lib/get-movies";
import { useEffect, useState } from "react";
import Movie from "./Movie"

function MovieList() {
    const [movieList , setMovieList] = useState([]);
    useEffect(() => {
        getMovies()
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }, []);
    return ( 
    <>
        <h1>Movie List</h1>
        <ul>
        {
            movieList.map((movie, index) =>(
                <li key={index}>
                    <Movie movie={movie}></Movie>
                </li>
            ))
        }
        </ul>
        
    </>
     );
}

export default MovieList;