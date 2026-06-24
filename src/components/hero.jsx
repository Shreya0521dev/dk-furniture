function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/hero.jpeg" // put your original image in public folder
        alt="DK Furniture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl text-white">
          {/* Small text */}
          <p className="uppercase tracking-[3px] text-[#d6a35d] text-xs md:text-sm mb-4">
            Premium Handcrafted Furniture
          </p>

          {/* Main heading */}
          <h1 className="font-serif font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Quality Furniture For Every Home
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-8 mb-8 max-w-xl">
            Timeless designs. Premium quality. Furniture that defines your space
            and brings elegance,comfort and durability into every corner of your
            home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Explore */}
            <button
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#8b5a2b] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Collection
            </button>

            {/* About */}
            <button
              onClick={() =>
                document
                  .getElementById("aboutus")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Know More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
