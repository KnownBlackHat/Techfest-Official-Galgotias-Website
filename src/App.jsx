import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Herooo from './components/Herooo';
import Hero from './Hero'

import './index.css';
import Workshops from "./Workshops";

function App() {
    return (
        <>
          <div className="App">
            <Header />
            <Hero />
            <Herooo />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            <Workshops />
            <Footer />
          </div>
    
          <ButtonGradient />
        </>
      );
};

export default App;
