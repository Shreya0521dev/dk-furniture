function Footer() {
  return (
    <footer className="bg-[#2c1a10] text-white px-6 md:px-12 lg:px-20 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-3">DK Furniture</h2>

          <p className="text-gray-400 leading-7 text-sm md:text-base">
            Premium handcrafted furniture designed to bring elegance, comfort
            and durability into every modern home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#c8a96e]">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => document.getElementById("hero")?.scrollIntoView()}
            >
              Home{" "}
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() =>
                document.getElementById("categories")?.scrollIntoView()
              }
            >
              Categories
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() =>
                document.getElementById("aboutus")?.scrollIntoView()
              }
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() =>
                document.getElementById("contactus")?.scrollIntoView()
              }
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#c8a96e]">
            Collections
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Chairs</li>
            <li>Beds</li>
            <li>Sofas</li>
            <li>Tables</li>
            <li>Wardrobes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#c8a96e]">Contact</h3>

          <div className="space-y-3 text-gray-400 text-sm md:text-base">
            <p>📞 +91 98737 73049</p>
            <p> WhatsApp Available</p>
            <p>📍 Delhi, India</p>
            <p>✉ info@dkfurniture.in </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 DK Furniture. All Rights Reserved.
        </p>

        <div className="flex gap-5 text-gray-400">
          <span className="cursor-pointer hover:text-white">Instagram</span>
          <span className="cursor-pointer hover:text-white">Facebook</span>
          <span className="cursor-pointer hover:text-white">WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
