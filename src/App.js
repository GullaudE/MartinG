import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Component/Accueil";
import Martin from "./Component/Martin";
import NavBar from "./Component/NavBar";
import ContactUs from "./Component/ContactUs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <NavBar/>
          <Routes>
              <Route path="*" element={<Accueil/>} />
              <Route path="/Component/Martin" element={<Martin/> }/>
              <Route path="/Component/ContactUs" element={<ContactUs/>}/>
          </Routes>
      </Router>
  );
}

export default App;
