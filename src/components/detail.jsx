import { C } from "../constants/colors";

function Detail({ selectedProduct, setPage }) {
  if (!selectedProduct) return null;

  return (
    <section
      className="px-5 md:px-10 lg:px-16 py-10 md:py-16"
      style={{ background: "white" }}
    >
      {/* Back Button */}
      <button
        onClick={() => setPage("products")}
        className="mb-8 px-5 py-3 rounded-lg text-white font-medium transition hover:scale-105"
        style={{ background: C.walnut }}
      >
        ← Back
      </button>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {/* Left Images */}
        <div>
          {/* Main Image */}
          <img
            src={selectedProduct.imgs[0]}
            alt={selectedProduct.name}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Details */}
        <div>
          {/* Product Name */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: C.walnut }}
          >
            {selectedProduct.name}
          </h1>

          {/* Description */}
          <p
            className="leading-8 mb-6 text-sm md:text-base"
            style={{ color: "#666" }}
          >
            {selectedProduct.desc}
          </p>

          {/* Features */}
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: C.walnut }}
          >
            Features
          </h3>

          <ul
            className="space-y-3 mb-8 text-sm md:text-base"
            style={{ color: "#555" }}
          >
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>

          {/* Contact Button */}
          <button
            onClick={() => window.open("https://wa.me/919873773049", "_blank")}
            className="bg-[#6b3f1d] text-white px-7 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Contact For Price
          </button>
        </div>
      </div>
      {/* Small Preview Images */}
      {/* Process Section under main image */}
      <div className="mt-10 bg-[#f8f5f1] rounded-2xl p-6 md:p-8 w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Heading */}
          <div className="lg:w-1/4">
            <h2 className="text-2xl md:text-4xl font-serif leading-tight text-[#4a3428]">
              Our Process
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
              Every furniture piece is handcrafted with precision and premium
              quality materials.
            </p>
          </div>

          {/* Right Images */}
          <div className="lg:w-3/4 flex gap-3 overflow-x-auto">
            {selectedProduct.imgs.slice(1).map((img, index) => (
              <div
                key={index}
                style={{ minWidth: "160px" }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  alt="process"
                  className="w-full h-52 object-contain hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
