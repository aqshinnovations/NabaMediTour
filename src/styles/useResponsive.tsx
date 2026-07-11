import { useState, useEffect } from "react";

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowWidth <= 600,
    isTablet: windowWidth > 600 && windowWidth <= 960,
    isDesktop: windowWidth > 960,
  };
};

export default useResponsive;