// App.jsx

import React, { useState } from 'react';
import  Sidebar  from './components/Sidebar'; // Corrected import
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  

  return (
    <>
      {/* <Sidebar /> */}
     <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} >

          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
