import './App.css';
import Header from './components/header';
import Services from './components/services';
import Cta from './components/cta';
import Countdown from './components/countdown';
import Contactform from './components/contact-form';
function App() {
  return (
    <div>
      <Header />
      <Services />
      <Cta />
      <Countdown />
      <Contactform />
    </div>
  );
}

export default App;
