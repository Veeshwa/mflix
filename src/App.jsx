
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignInPage from "./components/SignInPage";
import PrivateRoute from "./auth0/PrivateRoute";

function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/sigin" element={<SignInPage/>}/>
          <Route element={<PrivateRoute/>}>
          <Route path="/*" element={<Navbar/>}/>
          </Route>
          <Route path="/" element={<SignInPage/>}/>
          </Routes>    
    </Router>
  
  
  );
}

export default App
