
import {Routes,Route } from "react-router-dom";
import MovieList from "./MovieList";
import PopularMovieList from "./PopularMovieList";
import Header from "./Header";
import Home from "./Home";
import BrowseByLanguage from "./BrowseByLanguage"
import MyList from "./MyList"
import Profile from "../auth0/Profile";

function Navbar(){
  return(
    <>
      <Header/>
      <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="movie" element={<MovieList/>}/>
        <Route path="popular" element={<PopularMovieList/>}/>
        <Route path="language" element={<BrowseByLanguage/>}/>
        <Route path="list" element={<MyList/>}/>
        <Route path="profile" element={<Profile/>}/>
      
      </Routes>

    
    </>
  );
}

export default Navbar;