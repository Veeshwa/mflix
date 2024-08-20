
// import Header from "./Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieList from "./MovieList";
import PopularMovieList from "./PopularMovieList";
import Header from "./Header";
import Home from "./Home";

function Navbar(){
  return(
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="movie" element={<MovieList/>}/>
        <Route path="popular" element={<PopularMovieList/>}/>
      
      </Routes>
      
    
    
    </BrowserRouter>
    
    </>
  );
}

export default Navbar;