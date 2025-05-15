import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const LoadingBar=()=>{

useEffect(() => {
    NProgress.start(); // Start loading bar

    window.addEventListener("load", () => {
      NProgress.done(); // Finish when page fully loads
    });
     return () => {
      NProgress.done(); // Cleanup
    };
  }, []);
    return null
}

export default LoadingBar;