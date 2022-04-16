import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Copmonents/Home';
import AppNavbar from './Copmonents/AppNavbar';
import Footer from './Copmonents/Footer';
import Dashboards from './Copmonents/DashBoards/Dashboard';
import AboutUs from './Copmonents/AboutUs';
import MaterialUI from './Copmonents/MaterialUI';
import Responsive from './Responsive/Responsive.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Buy from './Copmonents/Buy';





function App() {
  return (
    <div className="App">
   <BrowserRouter>
 <AppNavbar/>
        <Routes> 
        <Route  exact path="/reactjs" element={<Home/>} />
        <Route  exact path="/" element={<Home/>} />
        <Route  path="/responsive" element={<Responsive />} />
        <Route  path="/dashboards" element={<Dashboards   />} />
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
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
*/