import './App.css';
import Header from './components/header';
import Services from './components/services';
import Banner from './components/banner';
import Cta from './components/cta';
import Countdown from './components/countdown';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Cta />
      <Countdown />
    </div>
  );
}

export default App;
