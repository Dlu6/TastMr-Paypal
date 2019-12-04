import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>CONTACT US</h4>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Other Services</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>SERVICES</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Menu</Link>
                </li>
                <li>
                  <Link to="/">Locations</Link>
                </li>
                <li>
                  <Link to="/">Riders</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>CONNECT WITH US</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
                <li>
                  <Link to="/">Google+</Link>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>ABOUT US</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/">Health</Link>
                </li>
                <li>
                  <Link to="/chef">Chef's corner</Link>
                </li>
                <li>
                  <Link to="/">Bookings</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <a href="/">Chef's corner</a> */}
          {/* Footer Copyright */}
          <div className="footer-bottom">
            <hr />
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} MM-iCT - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
