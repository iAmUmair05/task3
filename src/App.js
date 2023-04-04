import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from "./components/Footer";
import Newsletter from './components/Newsletter';
import People from './components/People';
import Users from './components/Users';
import Flip from './components/Flip';
import Cart from './components/Cart';
import vectorpic from "./assert/vector.png";

function App() {
  return (
    <div className="App">

      <div className='background'>

      <img src={vectorpic} alt="" className='absolute w-[680px] h-[600px] left-[669px]' />

      <Header></Header>
      <Banner></Banner>

      </div>
      <Cart></Cart>
      <Flip></Flip>
      <Users></Users>
      <People></People>
  
    <Footer/>
    </div>
  );
}

export default App;
