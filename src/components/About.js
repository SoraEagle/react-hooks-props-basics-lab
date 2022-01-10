import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      const bio = props.bio;
      if(bio){
        return (<p>{props.bio}</p>);
      }
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}

    </div>
  );
}

export default About;
