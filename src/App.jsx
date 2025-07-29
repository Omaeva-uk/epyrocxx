import { useEffect, useState } from "react";
import {HomePage, PrivacyPolicy, ServicePage, WorkPage} from "./Pages/index";
import { Routes, Route, useParams } from "react-router-dom";
import { Scrollto } from "./components";
import { useCookies } from "react-cookie";
import Aos from "aos";
import "aos/dist/aos.css";



import {CookieConsent} from "./components";



function App() {

  useEffect(() => {
      Aos.init({
        duration : 1000
      });
    }, []);
  
  const [isDeclined, setIsDeclined] = useState(null);
  const [cookies] = useCookies(["cookieConsent"]);

  //console.log(cookies);

  function cookieDecline(value){
    setIsDeclined(value);
  }

  return (
      <main className=" overflow-hidden">
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
          <Route path="/work" element={<WorkPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        
      </main>
  )
}

export default App;
