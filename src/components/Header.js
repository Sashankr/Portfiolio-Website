import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

import {headerData} from "../utils/mock"
import PropTypes from "prop-types"
import TwitterIcon from "../assets/images/Twitter.svg"
import LinkedInIcon from "../assets/images/linkedin.svg"
import GithubIcon from "../assets/images/GitHub.svg"
import MenuIcon from "../assets/images/Menu.svg"

const Header = ({headerData}) => {
  return (
    <header className="header">
      <Container>
          <section className="header__wrapper">
            <div className="header__logo">{headerData.logo}</div>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                {headerData.navigation.map((data,index)=>{
                  return <li key={index} className="header__navigation-item"><Link to="/">
                  {data.item}
                  </Link></li>
                })}
              </ul>
              <div className="header__social">
                <Link target="__blank" className="header__social-logo" to="https://github.com/Sashankr"><img id="github" src={GithubIcon} alt="github"/></Link>
                <Link target="__blank" className="header__social-logo" to="https://twitter.com/sashank__r"><img id="twitter" src={TwitterIcon} alt="twitter"/></Link>
                <Link target="__blank" className="header__social-logo" to="https://www.linkedin.com/in/sashank-rampalli"><img  src={LinkedInIcon} alt="linkedin"/></Link>
              </div>
            </nav>
            <div className="header__nav-menu">
              <img src={MenuIcon} alt="menu"/>
            </div>
          </section>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  headerData : headerData,
}

Header.propTypes = {
  headerData : PropTypes.object
}

export default Header;
