import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  NavLinks,
} from "./magazineElements";
function iframe() {
  return {
    __html:
      '<iframe src="./Folder/pts_eye.html" width="2048px" height="400" scrolling="no" frameborder="0" allowfullscreen></iframe>',
  };
}

const FirstSec = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <div dangerouslySetInnerHTML={iframe()} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover technology , online. </HeroH1>

        <NavLinks
          to="about1"
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
        ></NavLinks>
        <NavLinks
          to="about2"
          smooth="true"
          duration={500}
          exact="true"
          offset={-80}
        ></NavLinks>
        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default FirstSec;
