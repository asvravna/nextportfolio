import styles from "./page.module.css";
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Profile />
        <About /> 
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
