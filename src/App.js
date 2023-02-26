import './App.css';
import Home from './Components/Home/Home'
import Task from './Components/Task/Task';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Compolete from './Components/Complete/Complete';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task" element={<Task />} />
                <Route path="/complete" element={<Compolete />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
