import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa'

const Header = () => {
    return(
        <header>
            <Navbar bg='dark' variant= 'dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >                      
                        Project Showcase
                    </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>  
                            <Nav.Link 
                                href='https://github.com/s-illly' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center' }} // Optional: style to align icon and text
                            >
                                <FaGithub style={{ marginRight: '8px' }} /> Github
                            </Nav.Link>                  
                            <Nav.Link 
                                href='https://www.linkedin.com/in/lily-song-b82a18284/' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center' }} // Optional: style to align icon and text
                            >
                                <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
                            </Nav.Link> 
                            <Nav.Link 
                                href='https://devpost.com/s-illly?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center' }} // Optional: style to align icon and text
                            >
                                <FaLink style={{ marginRight: '8px' }} /> Devpost
                            </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )

}
export default Header;