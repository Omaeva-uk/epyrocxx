import { useEffect, useState } from "react";
import {HomePage, PrivacyPolicy, ServicePage} from "./Pages/index";
import { Routes, Route, useParams } from "react-router-dom";
import { Scrollto } from "./components";
import { useCookies } from "react-cookie";



import {CookieConsent} from "./components";



function App() {
  
  const [isDeclined, setIsDeclined] = useState(null);
  const [cookies] = useCookies(["cookieConsent"]);

  console.log(cookies);

  function cookieDecline(value){
    setIsDeclined(value);
  }

  return (
      <main>
        {isDeclined === null ? (
          !cookies.cookieConsent && <CookieConsent cookieDecline={cookieDecline} />
        ):
        (
          ""
        )}
        {/* {!cookies.cookieConsent && <CookieConsent cookieDecline={cookieDecline} />} */}
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
