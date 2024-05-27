import { ImageSlider } from "./ImageSlider.jsx";
import city1 from "./assets/images/city1.jpg";
import city2 from "./assets/images/city2.jpg";
import city3 from "./assets/images/city3.jpg";
import city4 from "./assets/images/city4.jpg";
import city5 from "./assets/images/city5.jpg";

const IMAGES = [
  { url: city1, alt: "Car One" },
  { url: city2, alt: "Car Two" },
  { url: city3, alt: "Car Three" },
  { url: city4, alt: "Car Four" },
  { url: city5, alt: "Car Five" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}
