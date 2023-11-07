import NavBar from '../components/NavBar';
import Carrossel from '../components/Carrossel';
import Footer from '../components/Footer';
import ComponenteHome from '../components/Componente-home';
import '../css/Home.css';

function Home() {
    
    return (
      <>
        <NavBar/>
        <Carrossel/>
        <ComponenteHome/>
        <Footer/>
     </>
    )
  }
  
  export default Home