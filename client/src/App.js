import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';

import Home from "./components/Home.js";
import Adverts from "./components/Adverts.js";
import AdvertCard from "./components/AdvertCard.js";
import Favorites from "./components/Favorites.js";

// import './styles/'

const App = () => {
    return (
        <Router basename="/nomad-nest-adventures">
            <div>
                <nav>
                    <ul>
                        <li> <Link to="/" >Home</Link></li>
                        <li> <Link to="/catalog" >Catalog</Link></li>
                        <li> <Link to="/favorites" >Favorites</Link></li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/catalog" element={<Adverts/>} />
                        <Route path="/favorites" element={<Favorites/>} />
                        <Route path="*" element={() => <Navigate to="/" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;