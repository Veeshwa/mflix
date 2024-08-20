export function getPopularMovie(){
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=8743de49927a071f85640fa92600d352')
}