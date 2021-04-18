import React from 'react'
import PropTypes from "prop-types"


const Hero = ({content}) => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">{content.title}</h2>
        <img src= {content.asideImage} alt="developer svg"/>
      </div>
    </section>
  )
}

Hero.propTypes = {
  content : PropTypes.object,
}

export default Hero
