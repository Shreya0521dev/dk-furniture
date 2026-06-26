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

          {/* Small Preview Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {selectedProduct.imgs.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="preview"
                className="w-full h-32 md:h-40 object-contain rounded-xl cursor-pointer transition duration-300 hover:scale-105"
                loading="lazy"
              />
            ))}
          </div>
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
    </section>
  );
}

export default Detail;
