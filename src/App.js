import './App.css';
import About from './Components/About';
import {Contact} from './Components/Contact';
import Draw from './Components/Draw';
import { Footer } from './Components/Footer';
import Intro from './Components/Intro';
import Learn from './Components/Learn';
import Navbar from './Components/Navbar';
import { Plan } from './Components/Plan';
import { Play } from './Components/Play';
import Resources from './Components/Resources';
import Testimonials from './Components/Testimonials';
import Title from './Components/Title';





function App() {
  return (
    <div className='app'>
    


      <Navbar />
      <Intro />
      <div className='container'>
        <Title subTitle='Resources' title='What We Offer' />
        <Resources />


        <Title subTitle='About us' title='Who Are We' />
        <About />
        <Draw/>
        <Learn/>
        <Play/>

        <Title subTitle='Testimonials' title='What Clients Think of Us' />
        <Testimonials />


        <Title subTitle='Plans' title='Offers and Packages' />
        <Plan/>

        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />

        <Footer />

      </div>
    </div>
  );
}

export default App;
