import styles from "./page.module.css";
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
// import Projects from './components/Projects';
import Footer from './components/Footer';




export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Profile />
        <About />
        <Footer />

      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
