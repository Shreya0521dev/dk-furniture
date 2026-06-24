import { C } from "../constants/colors";

function LogoMark({ size = 44 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: C.walnut,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <span
        style={{
          color: C.gold,
          fontWeight: 900,
          fontSize: size * 0.4,
        }}
      >
        DK
      </span>
    </div>
  );
}

export default LogoMark;
