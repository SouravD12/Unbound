import Content from "./components/content";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mid-section">
        <Hero />
        <Content />
      </div>
    </div>
  );
}