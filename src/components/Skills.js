import React from 'react'

import GraphQLIcon from "../assets/images/graphql.svg"
import GatsbyIcon from "../assets/images/gatsby.svg"
import ReactIcon from "../assets/images/react.svg"
import WordpressIcon from "../assets/images/wordpress.svg"

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__heading">Skills</h2>
      <div className="skills__logos">
        <img id="react" loading="lazy" src={ReactIcon} alt="react"/>
        <img id="gatsby" loading="lazy" src={GatsbyIcon} alt="gatsby"/>
        <img id="graphql" loading="lazy" src={GraphQLIcon} alt="graphql"/>
        <img id="wordpress" loading="lazy" src={WordpressIcon} alt="wordpress"/>
      </div>
    </div>
  )
} 

export default Skills
