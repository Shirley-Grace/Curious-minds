import './App.css';
import About from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Resources from './Components/Resources';
import Testimonials from './Components/Testimonials';
import Title from './Components/Title';

function App() {
  return (
   <div>
    <Navbar/>
    <Intro/>
    <div className='container'>
      <Title subTitle='Resources' title='What We Offer'/>

    <Resources/>
    <Title subTitle='About us' title='Who Are We'/>

    <About/>
    <Title subTitle='Testimonials' title='What Clients Think of Us'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>

    </div>
    </div>
  );
}

export default App;
