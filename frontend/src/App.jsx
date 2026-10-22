import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Edition from "./components/Edition";
import Countdown from "./components/Countdown";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Edition />
        <Countdown />
        <Speakers />
        <Venue />
        <Register />
      </main>
      <Footer />
    </>
  );
}
