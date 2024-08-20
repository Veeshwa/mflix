export function getNowPlaying(){
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8743de49927a071f85640fa92600d352')
}