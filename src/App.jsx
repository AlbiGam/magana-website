import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Partners from './components/Partners';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Partners />
        <Calendar />
        <Contact />
      </main>
    </>
  );
}

export default App;
