import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-5xl'>Welcome to my first react-tailwind website</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
