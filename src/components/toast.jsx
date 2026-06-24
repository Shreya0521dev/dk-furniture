import { C } from "../constants/colors";

function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        background: C.walnut,
        color: "white",
        padding: "14px 22px",
        borderRadius: 12,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        zIndex: 9999,
        fontWeight: 500,
      }}
    >
      {message}
    </div>
  );
}

export default Toast;
