import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Copmonents/Style.css';
import Home from './Copmonents/Home';
import AppNavbar from './Copmonents/AppNavbar';
import Footer from './Copmonents/Footer';

import AboutUs from './Copmonents/AboutUs';
import MaterialUI from './Copmonents/MaterialUI';
import Responsive from './Responsive/Responsive.jsx';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Card,Button } from 'react-bootstrap';
import Buy from './Copmonents/Buy';





function App() {
  return (
    <div className="App">
   <BrowserRouter>
 <AppNavbar/>
        <Routes> 
        <Route path="" element={<Home/>} />
        <Route  path="/responsive" element={<Responsive />} />
        <Route  path="/aboutus" element={<AboutUs />} />
        <Route  path="/footer" element={<Footer />} />
        <Route  path="/buy" element={<Buy />} />
        <Route  path="/materialui" element={<MaterialUI />} />
        </Routes>
 </BrowserRouter>

    </div>
  );
}

export default App;
/*
<Route exact path="/"><Home/></Route>
          <Route path="/aboutus"><AboutUs /></Route>
          <Route path="/footer"><Footer /></Route>
          <Route path="/buy"><Buy /></Route>
          <Route path="/materialui"><Buy /></Route>
*/