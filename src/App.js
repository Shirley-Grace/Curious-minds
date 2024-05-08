import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Resources from './Components/Resources';

function App() {
  return (
   <div>
    <Navbar/>
    <Intro/>
    <div className='container'>
    <Resources/>
    </div>
    </div>
  );
}

export default App;
