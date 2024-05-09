import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Resources from './Components/Resources';
import Title from './Components/Title';

function App() {
  return (
   <div>
    <Navbar/>
    <Intro/>
    <div className='container'>
      <Title subTitle='Resources' title='What We Offer'/>

    <Resources/>
    </div>
    </div>
  );
}

export default App;
