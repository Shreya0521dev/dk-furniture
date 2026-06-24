import { C } from "../constants/colors";
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-16 py-12 gap-10"
      style={{ background: C.cream }}
    >
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1
          className="font-extrabold leading-tight mb-5 text-4xl md:text-5xl lg:text-7xl"
          style={{ color: C.walnut }}
        >
          Quality Furniture <br />
          For Every Home
        </h1>

        <p
          className="text-sm md:text-base lg:text-lg leading-8 mb-8 max-w-xl mx-auto lg:mx-0"
          style={{ color: "#666" }}
        >
          Discover handcrafted premium furniture designed to bring elegance,
          comfort and durability into every space of your home.
        </p>

        <button
          onClick={() => {
            document.getElementById("categories")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="px-6 py-4 rounded-xl text-sm md:text-base font-semibold transition hover:scale-105"
          style={{
            background: C.walnut,
            color: "white",
          }}
        >
          Explore
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80"
          alt="Furniture"
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
