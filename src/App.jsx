import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/category";
import Products from "./components/products";
import Detail from "./components/detail";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Hero />
          <Categories
            setSelectedCategory={setSelectedCategory}
            setPage={setPage}
          />
          <About />
          <Contact />
        </>
      )}

      {page === "products" && (
        <Products
          selectedCategory={selectedCategory}
          setSelectedProduct={setSelectedProduct}
          setPage={setPage}
        />
      )}

      {page === "detail" && (
        <Detail selectedProduct={selectedProduct} setPage={setPage} />
      )}

      <Footer />
    </>
  );
}

export default App;
