import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import Title from './Title';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link className="navbar-brand ml-5" to='/'>
          {/* <img src={logo} alt="store" className="navbar-brand"/> */}
          <img alt="Logo" src="//africa-public.food.jumia.com/assets/production/ug/images/site-overrides/site_header_logo_path-20180916-174133.png" style={{ width:'100px' }} />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <Title name="Menu"/>
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" />
            </span>
            my Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background:var(--mainRed);
.nav-link {
  color:nav(--mainWhite)!important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`
