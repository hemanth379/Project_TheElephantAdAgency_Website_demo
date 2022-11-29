import Contactpage from "./pages/Contactpage";
import Homepage from "./pages/Homepage"
import Aboutuspage from "./pages/Aboutuspage";
import Ourservicespage from "./pages/Ourservicespage";
import Blogpage from "./pages/Blogpage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Routes>
       <Route exact path="/" element={<Homepage/>} />
       <Route path="/contactpage" element={<Contactpage/>} /> 
       <Route path="/aboutuspage" element={<Aboutuspage/>} /> 
       <Route path="/ourservicespage" element={<Ourservicespage/>} /> 
       <Route path="/blogpage" element={<Blogpage/>} /> 
       
    </Routes>
    
  </Router>
  )
};

export default App;