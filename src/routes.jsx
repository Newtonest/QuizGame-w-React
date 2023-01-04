import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home/home";
import { Results } from "./pages/results/results";

export function MyRoutes(){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element ={<Home/>}></Route>
          <Route exact path="/results" element={<Results/>}></Route>
        </Routes>
      </Router>
    )
}