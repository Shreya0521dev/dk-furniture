import { C } from "../constants/colors";
import { PRODUCTS } from "../data/product";

function Products({ selectedCategory, setSelectedProduct, setPage }) {
  const items = PRODUCTS[selectedCategory] || [];

  return (
    <section
      className="px-5 md:px-10 lg:px-16 py-16 min-h-screen"
      style={{ background: C.mist }}
    >
      <button
        onClick={() => {
          setPage("home");

          setTimeout(() => {
            document.getElementById("categories")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }}
        className="mb-8 bg-[#3b2416] text-white px-5 py-3 rounded-lg"
      >
        ← Back
      </button>
      {/* Heading */}
      <div className="mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          style={{ color: C.walnut }}
        >
          Our Collection
        </h2>

        <p
          className="text-sm md:text-base lg:text-lg"
          style={{ color: "#666" }}
        >
          Explore beautifully crafted premium furniture pieces.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedProduct(item);
              setPage("detail");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={item.imgs[0]}
              alt={item.name}
              className="w-full h-100 object-contain"
            />

            <div className="p-5">
              <h3
                className="text-xl md:text-2xl mb-2 font-semibold"
                style={{ color: C.walnut }}
              >
                {item.name}
              </h3>

              <div className="inline-block mt-2 px-4 py-2 rounded-full bg-[#f5efe8] text-[#6b3f1d] font-medium text-sm">
                Contact For Price
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
