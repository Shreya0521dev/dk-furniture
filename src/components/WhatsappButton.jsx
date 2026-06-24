function WhatsappButton({ text = "Chat on WhatsApp", className = "" }) {
  const phone = "919873773049"; // owner number

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition inline-block ${className}`}
    >
      {text} →
    </a>
  );
}

export default WhatsappButton;
