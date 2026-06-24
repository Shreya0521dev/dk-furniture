function About() {
  const features = [
    {
      icon: "🪵",
      title: "Premium Materials",
      desc: "Sustainably sourced teak, sheesham & premium cane",
    },
    {
      icon: "🛠️",
      title: "Expert Artisans",
      desc: "Craftsmen with 15+ years of hands-on mastery",
    },
    {
      icon: "🎨",
      title: "Custom Design",
      desc: "Bespoke pieces tailored to your space & style",
    },
    {
      icon: "🚚",
      title: "Pan India Delivery",
      desc: "Delivering to every corner of the country",
    },
  ];

  return (
    <section
      id="aboutus"
      className="bg-[#3b2416] px-6 md:px-12 lg:px-20 py-16 md:py-24"
    >
      {/* Heading */}
      <p className="text-[#c8a96e] tracking-[3px] text-xs md:text-sm mb-3 uppercase">
        Our Story
      </p>

      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif max-w-3xl">
        Two Brands. One Legacy <br /> of Craft.
      </h2>

      <div className="w-14 h-0.5 bg-yellow-700 my-6"></div>

      <p className="text-gray-300 text-base md:text-lg leading-8 max-w-4xl mb-14">
        From a cane workshop established in 1991 to a full-service furniture
        showroom — our family has been shaping Indian homes across three
        decades.
      </p>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 bg-white/5 rounded-2xl p-6"
          >
            <div className="text-3xl mb-4">{item.icon}</div>

            <h3 className="text-white text-2xl font-serif font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-7 text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dalip Cane Works */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Image */}
          <img
            src="/dalip_cane.jpeg"
            alt="Dalip Cane Works"
            className="w-full h-64 md:h-72 object-cover"
          />

          <div className="p-6 md:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">
              Dalip Cane Works
            </h2>

            <p className="text-[#c8a96e] tracking-[2px] mb-6 text-sm uppercase">
              Since 1991
            </p>

            <p className="text-gray-300 leading-8 mb-6 text-sm md:text-base">
              Dalip Cane Works has been a cornerstone of Indian handcraft since
              1991. We specialise in premium cane works and raw & finished
              handmade teakwood furniture, delivering quality pieces at honest
              prices. With a vast network of retailers and wholesalers across
              India, we are trusted by thousands.
            </p>

            <div className="bg-white/5 rounded-xl p-5">
              <p className="text-[#c8a96e] mb-3 uppercase text-sm tracking-[2px]">
                Products
              </p>

              <ul className="text-white space-y-2 text-sm md:text-base">
                <li>• Bed</li>
                <li>• Sofa</li>
                <li>• Dining Table</li>
                <li>• Dressing</li>
                <li>• Cane Furniture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DK Furniture */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Image */}
          <img
            src="/dk_fur.jpeg"
            alt="DK Furniture"
            className="w-full h-64 md:h-72 object-cover"
          />

          <div className="p-6 md:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">
              DK Furniture
            </h2>

            <p className="text-[#c8a96e] tracking-[2px] mb-6 text-sm uppercase">
              Since 2008
            </p>

            <p className="text-gray-300 leading-8 mb-6 text-sm md:text-base">
              DK Furniture blends traditional craftsmanship with modern design.
              Premium handcrafted furniture designed to last for generations.
              Using sustainably sourced hardwoods, premium upholstery and expert
              finishing, we have delivered timeless furniture to 5000+ homes.
            </p>

            <div className="bg-white/5 rounded-xl p-5">
              <p className="text-[#c8a96e] mb-3 uppercase text-sm tracking-[2px]">
                Products
              </p>

              <ul className="text-white space-y-2 text-sm md:text-base">
                <li>• Premium Chairs</li>
                <li>• Designer Sofas</li>
                <li>• Luxury Tables</li>
                <li>• Wardrobes</li>
                <li>• Custom Furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
