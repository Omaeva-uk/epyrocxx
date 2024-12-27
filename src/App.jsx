import { useEffect, useState } from "react";
import {HomePage, ServicePage} from "./Pages/index";
import { Routes, Route, useParams } from "react-router-dom";
import { Scrollto } from "./components";



function App() {
  
  

  return (
    <div>
      <main>
        <Scrollto />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
        </Routes>
       
      






        {/* <Testing />
        <div className='h-screen w-full'></div> */}
      </main>
    </div>
  )
}

export default App;
