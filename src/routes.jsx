import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home/home";
import { Second } from "./pages/second/second";
import { Results } from "./pages/results/results";
import { Third } from "./pages/third/third";
import { Inicio } from "./pages/inicio/inicio";
export function MyRoutes(){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element ={<Inicio/>}></Route>
          <Route exact path="/home" element ={<Home/>}></Route>
          <Route exact path="/results" element={<Results/>}></Route>
          <Route exact path="/second" element={<Second/>}></Route>
          <Route exact path="/third" element={<Third/>}></Route>
        </Routes>
      </Router>
    )
}