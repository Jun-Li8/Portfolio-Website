import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.scss'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import { icons } from 'react-icons/lib';
import styled from 'styled-components';

const NavigationBar = () => (
    <div className='navbar'>
        <div className='wrapper'>
            <Navbar expand='lg'>
                <Navbar.Brand href="#intro" className='home'>Jun's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className='left'>
                    <Nav>
                        <a href="#projects" className='links'>Projects</a>
                        <a href="#contact" className='links'>Contact</a>
                    </Nav>
                </div>
                <div className='right'>
                    <Nav.Link href='https://www.linkedin.com/in/jun-li-987490181/'>
                        <BsLinkedin className='logo'/>
                    </Nav.Link>
                    <Nav.Link href='https://github.com/Jun-Li8'>
                        <BsGithub className='logo'/>
                    </Nav.Link>
                </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>

)

const StyledNavLink = styled(Nav.Link)`
  text-emphasis: none;
  text-decoration: none;
  }`;

export default NavigationBar;