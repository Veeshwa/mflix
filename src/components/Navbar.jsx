
// import Header from "./Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieList from "./MovieList";
import PopularMovieList from "./PopularMovieList";
import Header from "./Header";
import Home from "./Home";
import BrowseByLanguage from "./BrowseByLanguage"
import MyList from "./MyList"

function Navbar(){
  return(
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="movie" element={<MovieList/>}/>
        <Route path="popular" element={<PopularMovieList/>}/>
        <Route path="language" element={<BrowseByLanguage/>}/>
        <Route path="list" element={<MyList/>}/>
      
      </Routes>
      
    
    
    </BrowserRouter>
    
    </>
  );
}

export default Navbar;