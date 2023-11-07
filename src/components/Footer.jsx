import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

function Footer() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Flavor</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className='footer-links'>
          <Navbar.Text>
            Contato: flavor@gmail.com.br
          </Navbar.Text>
          <br />
          <Navbar.Text>
            Endereço: Rua joao
            </Navbar.Text>
          <div>
          <img src={Instagram} height={30} width={30}></img>  
          </div>
          <Navbar.Text>
          @flavors
            </Navbar.Text>
          <div>
          <img src={Facebook} height={30} width={30}></img> 
          </div>
          <Navbar.Text>
          @flavors
            </Navbar.Text>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;