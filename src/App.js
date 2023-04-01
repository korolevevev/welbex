import './styles.css';
import {Navbar} from "./Components/Navbar";
import {MainContent} from "./Components/MainContent";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <div id="bg-effects-desktop">
        <img id="red-light" src="/images/red_light.png" alt="red light" />
        <img id="purple-light" src="/images/purple_light.png" alt="purple light" />
        <img id="red-ball" src="/images/red_ball.svg" alt="red ball" />
        <img id="purple-ball" src="/images/purple_ball.svg" alt="purple ball" />
        <img id="red-ball-small" src="/images/red_ball.svg" alt="red ball small" />
      </div>
      <div className="content">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
