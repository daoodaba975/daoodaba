import Wall from "./Wall";
import reactbits from "../../public/logo.svg";

const logoImgs = [
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
  { imgUrl: reactbits, altText: "React Bits Logo" },
];

export function getLogoImages() {
  return logoImgs;
}

<div style={{ height: "600px", width: "100%", position: "relative" }}>
  <Wall
    items={logoImgs}
    direction="horizontal"
    pauseOnHover={true}
    size="clamp(8rem, 1rem + 20vmin, 25rem)"
    duration="60s"
    bgColor="#060606"
    bgAccentColor="#111111"
  />
</div>;
