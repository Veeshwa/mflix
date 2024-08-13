export function getMovies(){
    return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8743de49927a071f85640fa92600d352')
}