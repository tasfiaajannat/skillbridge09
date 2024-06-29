import React from "react";
import Home from "./Home/Home";
import Course from "./Course/Course";
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
    </Routes>
    
    </>

  );
}

export default App
