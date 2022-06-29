import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Ecosystum from './components/ecosystum';
import CoinCard from './components/coinCard';
import HowToBuy from './components/howToBuy';
import ShibaSwap from './components/shibaSwap';
import Art from './components/art';
import Community from './components/community';
import Social from './components/social';

function App() {
  return (
    <>
    <Navbar/>
    <Ecosystum/>
    <CoinCard/>
    <HowToBuy/>
    <ShibaSwap></ShibaSwap>
    <Art/>
    <Community/>
    <Social/>
    </>
  );
}

export default App;
