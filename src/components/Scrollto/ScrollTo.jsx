import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const Scrollto = () => {

    const {pathname} = useLocation();
    console.log(pathname);

    useEffect(() => {

      if(pathname === "/"){
        return;
      }else{
        //console.log("false")
        window.scrollTo(0,0);
      }
      
        


    }, [pathname])
    



  return null;
}

export default Scrollto;