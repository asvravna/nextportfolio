import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div>
        <Header />
        <Profile />
        <About /> 
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>

     
  );
}

