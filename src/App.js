import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import './App.css';

function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/movies" element={ <HomeScreen />} exact />
      <Route path="/movies/:id" element={ <MovieScreen />} exact />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
