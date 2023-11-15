import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./Cart";
import Logo from './logo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">  <img src={Logo} alt="Logo" style={{ width: '120px' }} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Blog Yazıları</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Forum</NavLink>
              </NavItem>
              <Cart
                cart={this.props.cart}
                removeToCart={this.props.removeToCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
