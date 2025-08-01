import {useCookies} from "react-cookie";

const CookieConsent = ({cookieDecline}) => {

    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    function onAccepting(){
        setCookie("cookieConsent", true, {path: "/"});
        console.log("cookies accepted");
    }
    function onDeclining(){
        // setCookie("cookieConsent", false, {path: "/"});
        cookieDecline(true);
        console.log("cookies declined");
    }

  return (
    <div className="bg-h2 font-Exo w-full fixed bottom-0 z-[999] p-3">
        <div className="flex flex-wrap gap-4 justify-between items-center text-white">
            <div>
                <p>We use cookies to ensure you have the best experience on our website and to analyze site usage via Google Analytics.</p>
            </div>
            <div className="flex gap-8">
                <button onClick={onDeclining} className="bg-red-600 rounded-lg py-3 px-5">Decline</button>
                <button onClick={onAccepting} className="bg-green-600 py-3 rounded-lg px-5">Accept</button>
            </div>
        </div>
    </div>
  )
}

export default CookieConsent;