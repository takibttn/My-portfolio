import { ImageResponse } from "next/og";

export const alt = "Boutoutane Takey — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f4f3ed",
        color: "#151713",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, justifyContent: "space-between" }}>
        <span>BT.</span>
        <span style={{ color: "#315c47" }}>Software Engineer</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 108, letterSpacing: "-5px" }}>
          Boutoutane Takey.
        </div>
        <div style={{ color: "#595b53", fontSize: 34, marginTop: 20 }}>
          Full-stack development &amp; applied AI.
        </div>
      </div>
    </div>,
    size,
  );
}
