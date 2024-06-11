import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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
                        <li> <a href="/" >Home</a></li>
                        <li> <a href="/catalog" >Catalog</a></li>
                        <li> <a href="/favorites" >Favorites</a></li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route exact path="/" element={Home} />
                        <Route path="/catalog" element={Adverts} />
                        <Route path="/favorites" element={Favorites} />
                        <Route path="*" element={<Navigate to="/"/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;