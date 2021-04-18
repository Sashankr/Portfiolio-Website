import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

import {headerData} from "../assets/utils/mock"
import PropTypes from "prop-types"
import TwitterIcon from "../assets/images/Twitter.svg"
import LinkedInIcon from "../assets/images/linkedin.svg"
import GithubIcon from "../assets/images/GitHub.svg"

const Header = ({headerData}) => {
  return (
    <header className="header">
      <Container>
          <section className="header__wrapper">
            <div className="header__logo">{headerData.logo}</div>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                {headerData.navigation.map((data,index)=>{
                  return <li key={index} className="header__navigation-item">{data.item}</li>
                })}
              </ul>
              <div className="header__social">
                <img src={GithubIcon} alt="github"/>
                <img src={TwitterIcon} alt="twitter"/>
                <img src={LinkedInIcon} alt="linkedin"/>
              </div>
            </nav>
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
