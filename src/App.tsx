import About from "./components/About/About.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.tsx";
import Target from "./components/Target/Target.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Target />
        <About />
        <HowItWorks />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
