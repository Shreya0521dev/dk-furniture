import { C } from "../constants/colors";

import { useEffect, useState } from "react";

function LogoMark() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src="/logo (2).png"
      alt="DK Furniture Logo"
      className={`object-contain transition-all duration-500 ${
        scrolled ? "w-14 h-14" : "w-20 h-20 md:w-24 md:h-24"
      }`}
    />
  );
}

export default LogoMark;
