import { C } from "../constants/colors";
import LogoMark from "./logomark";

function Navbar({ setPage }) {
  const scrollToSection = (id) => {
    setPage("home");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <nav
      className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-16 py-4 gap-4"
      style={{
        background: "rgba(250,247,242,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${C.sand}`,
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setPage("home")}
      >
        <LogoMark />

        <div>
          <div
            className="text-lg md:text-xl font-extrabold tracking-wide"
            style={{ color: C.walnut }}
          >
            DK Furniture
          </div>

          <div className="text-xs tracking-[2px]" style={{ color: "#777" }}>
            Quality You Deserve
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium"
        style={{ color: C.charcoal }}
      >
        <span
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("hero")}
        >
          Home
        </span>

        <span
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("categories")}
        >
          Categories
        </span>

        <span
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("aboutus")}
        >
          About
        </span>

        <span
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("contactus")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
