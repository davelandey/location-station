import './App.css';
import Nasa from './components/Nasa.jsx';
import TicketMaster from './components/TicketMaster.jsx';
import Weather from './components/Weather.jsx';

function App() {
  return (
    
    <>
    <h1>Hello from Location Station</h1>
    <h3>This is from the develop branch!</h3>
    <Weather />
    <TicketMaster />
    <Nasa />
    </>
  );
}

export default App;
