import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">LOGO</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              
              <NavItem>
                <NavLink href="#about">Funcionalidades</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Plans">Planos e preços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Contact">Fale conosco</NavLink>
              </NavItem>
                       
                <button type="button" className="btn_product">experimente gratis</button>
               
             
            </Nav>
   
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;