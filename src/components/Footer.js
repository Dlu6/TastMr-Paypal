import React from "react";
import styled from "styled-components";

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
                  <a href="/">Menu</a>
                </li>
                <li>
                  <a href="/">Locations</a>
                </li>
                <li>
                  <a href="/">Riders</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>CONNECT WITH US</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Youtube</a>
                </li>
                <li>
                  <a href="/">Google+</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>ABOUT US</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Health</a>
                </li>
                <li>
                  <a href="/">Chef's corner</a>
                </li>
                <li>
                  <a href="/">Bookings</a>
                </li>
              </ul>
            </div>
          </div>
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
