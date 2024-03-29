import React, { useEffect, useState } from 'react';
import Login from "./components/Login";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Stellenanzeigen from './components/EditPages/Stellenanzeigen/Stellenanzeigen';
import Rezensionen from './components/EditPages/rezensionen/Rezensionen';
import Team from './components/EditPages/team/Team';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Topbar />
      <Routes>
        <Route
        path="/"
        element={ isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
           path="/login"
           element={!isLoggedIn ? <Login/> : <Navigate to="/" />} />
        <Route
           path="/stellenanzeigen"
           element={isLoggedIn ? <Stellenanzeigen /> : <Navigate to="/login" />} />
        <Route
           path="/rezensionen"
           element={isLoggedIn ? <Rezensionen /> : <Navigate to="/login" />} />

<Route
           path="/team"
           element={isLoggedIn ? <Team />: <Navigate to="/login" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
