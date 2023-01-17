import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown , Modal} from 'react-bootstrap';
import logo from '../assets/logo2.png'

const MyNavbar = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleAboutClick = () => {
        setShowModal(true);
      };
    
    const handleCloseModal = () => {
    setShowModal(false);
    };


  return (

    <>
    
    <BootstrapNavbar bg="light" expand="lg">
     <BootstrapNavbar.Brand >
      <div className="navbar-brand-animation"> Welcome to Storm YDownloader</div>
      <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
      </BootstrapNavbar.Brand>
      
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        <button type='button' className='nav-about' onClick={() => handleAboutClick(false)} >
            About</button>
      
        
            <NavDropdown.Divider />
            
        
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>

    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header >


          <br/>
          <Modal.Title>About this website</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>Welcome to Storm YDownloader, a website for downloading videos from youtube!</p>
          <p>This website was created by a developer who is passionate about making it easy to get videos from youtube</p>
          <p>We hope you enjoy using our website and find it helpful in your download needs.</p>
        </Modal.Body>
        
        <Modal.Footer>
          <button onClick={handleCloseModal}>Close</button>
        </Modal.Footer>
       
      </Modal>
     

    </>
  );
}

export default MyNavbar;

