import { C } from "../constants/colors";
import { CATEGORIES } from "../data/product";

function Categories({ setSelectedCategory, setPage }) {
  return (
    <section id="categories" className="px-5 md:px-10 lg:px-16 py-16 bg-white">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-base md:text-lg" style={{ color: C.gold }}>
          Explore Categories
        </p>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1 mb-2"
          style={{ color: C.walnut }}
        >
          Our Collections
        </h2>

        <div className="w-12 h-0.5 my-4" style={{ background: C.gold }} />

        <p
          className="text-sm md:text-base lg:text-lg leading-7"
          style={{ color: "#666" }}
        >
          Browse our premium handcrafted furniture collection.
          <br />
          Every piece crafted with precision — find the perfect fit for every
          corner of your home.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setPage("products");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:scale-105"
            style={{ background: C.cream }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-95 object-contain"
            />

            <div className="p-5">
              <h3
                className="text-xl md:text-2xl mb-2 font-semibold"
                style={{ color: C.walnut }}
              >
                {cat.name}
              </h3>

              <p style={{ color: "#777" }}>{cat.count} Products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
