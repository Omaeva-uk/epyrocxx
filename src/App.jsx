import { useEffect, useState } from "react";
import {HomePage, PrivacyPolicy, ServicePage} from "./Pages/index";
import { Routes, Route, useParams } from "react-router-dom";
import { Scrollto } from "./components";




function App() {
  
  

  return (
      <main>
        
        <Scrollto />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
  )
}

export default App;
