import { useState, useEffect } from "react";
import { C } from "../constants/colors";

function Detail({ selectedProduct, setPage }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!selectedProduct) return null;

  const processImages = selectedProduct.imgs.slice(1);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === processImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? processImages.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeImage();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section
      className="px-5 md:px-10 lg:px-16 py-10 md:py-16"
      style={{ background: "white" }}
    >
      <button
        onClick={() => setPage("products")}
        className="mb-8 px-5 py-3 rounded-lg text-white font-medium transition hover:scale-105"
        style={{ background: C.walnut }}
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        <div>
          <img
            src={selectedProduct.imgs[0]}
            alt={selectedProduct.name}
            className="w-full h-auto object-contain"
          />
        </div>

        <div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: C.walnut }}
          >
            {selectedProduct.name}
          </h1>

          <p
            className="leading-8 mb-6 text-sm md:text-base"
            style={{ color: "#666" }}
          >
            {selectedProduct.desc}
          </p>

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

          <button
            onClick={() => window.open("https://wa.me/919873773049", "_blank")}
            className="bg-[#6b3f1d] text-white px-7 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Contact For Price
          </button>
        </div>
      </div>

      <div className="mt-10 bg-[#f8f5f1] rounded-2xl p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <h2 className="text-2xl md:text-4xl font-serif text-[#4a3428]">
              Our Process
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Every furniture piece is handcrafted with precision and premium
              quality materials.
            </p>
          </div>

          <div className="lg:w-3/4 flex gap-3 overflow-x-auto">
            {processImages.map((img, index) => (
              <div
                key={index}
                style={{ minWidth: "160px" }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  onClick={() => openImage(index)}
                  className="w-full h-52 object-contain cursor-pointer hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*Image Viewer */}
      {selectedIndex !== null && (
        <div
          onClick={closeImage}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(250,247,242,.25)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: window.innerWidth < 768 ? "12px" : "30px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95%",
              maxWidth: "1400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: window.innerWidth < 768 ? "8px" : "25px",
              position: "relative",
            }}
          >
            {/* Previous Arrow */}
            <button
              onClick={prevImage}
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,.12)",
              }}
            >
              ❮
            </button>

            {/* Previous Preview */}
            <img
              src={
                processImages[
                  selectedIndex === 0
                    ? processImages.length - 1
                    : selectedIndex - 1
                ]
              }
              style={{
                width: window.innerWidth < 768 ? "0px" : "130px",
                display: window.innerWidth < 768 ? "none" : "block",
                opacity: 0.45,
                borderRadius: "18px",
                objectFit: "cover",
              }}
            />

            {/* Main Image */}
            <img
              src={processImages[selectedIndex]}
              style={{
                width: window.innerWidth < 768 ? "95%" : "70%",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: "24px",
                background: "#fff",
                padding: "14px",
                boxShadow: "0 20px 60px rgba(0,0,0,.15)",
              }}
            />

            {/* Next Preview */}
            <img
              src={
                processImages[
                  selectedIndex === processImages.length - 1
                    ? 0
                    : selectedIndex + 1
                ]
              }
              style={{
                width: window.innerWidth < 768 ? "0px" : "130px",
                display: window.innerWidth < 768 ? "none" : "block",
                opacity: 0.45,
                borderRadius: "18px",
                objectFit: "cover",
              }}
            />

            {/* Next Arrow */}
            <button
              onClick={nextImage}
              style={{
                width: window.innerWidth < 768 ? "45px" : "58px",
                height: window.innerWidth < 768 ? "45px" : "58px",
                fontSize: window.innerWidth < 768 ? "18px" : "24px",
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,.12)",
              }}
            >
              ❯
            </button>
            {/* Close Button */}
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "-18px",
                right: "-18px",
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                cursor: "pointer",
                fontSize: "22px",
                fontWeight: "bold",
                boxShadow: "0 10px 25px rgba(0,0,0,.15)",
              }}
            >
              ✕
            </button>

            {/* Image Counter */}
            <div
              style={{
                position: "absolute",
                bottom: window.innerWidth < 768 ? "20px" : "-45px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,.9)",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#4a3428",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              }}
            >
              {selectedIndex + 1} / {processImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Detail;
