function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      text: "+91 98737 73049",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      text: "Chat with us on WhatsApp",
    },
    {
      icon: "📍",
      title: "Visit Our Store",
      text: "Shop No. 3, A-193, WHS, Block A Kirti Nagar, New Delhi – 110015",
    },
    {
      icon: "🕒",
      title: "Timings",
      text: "Mon - Sun : 10:00 AM - 8:00 PM",
    },
  ];

  return (
    <section
      id="contactus"
      className="bg-[#faf7f2] px-4 md:px-8 lg:px-10 py-12"
    >
      <div className="max-w-7xl mx-auto bg-[#f8f3ed] border border-[#e6d8c8] rounded-3xl p-6 md:p-10">
        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80"
              alt="Chair"
              className="w-52 h-72 object-cover rounded-2xl"
            />

            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#3b2416] leading-tight mb-4 font-serif">
                Looking For Something Specific?
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">
                Share your requirements with us. <br />
                We will help you find the perfect furniture.
              </p>

              <button
                onClick={() =>
                  window.open("https://wa.me/919873773049", "_blank")
                }
                className="bg-[#6b3f1d] text-white px-7 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Chat on WhatsApp →
              </button>
            </div>
          </div>

          {/* Right Side Contact Info */}
          <div className="border-l border-[#ddd0c1] pl-0 lg:pl-10">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-b border-[#e5d8ca] pb-5"
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#efe5da] flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#3b2416]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
