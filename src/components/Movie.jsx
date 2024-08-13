function Movie({movie}) {
    return ( 
        <>
            <h1>{movie.title}</h1>
            <h2>{movie.overview}</h2>
            <h6>{movie.release_date}</h6>
        </>
     );
}

export default Movie;