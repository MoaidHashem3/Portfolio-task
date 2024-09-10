import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Landing from './components/Landing/Landing';
import MyNavbar from './components/Navbar/MyNavbar';
import About from './components/About Me/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <MyNavbar/>
    <Landing/>
    <About/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
