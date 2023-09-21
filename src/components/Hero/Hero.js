import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{ fontFamily: "cursive" }}>
          Welcome To <br />
          Snehil's Portfolio
        </SectionTitle>
        <SectionText>
          Working With software and Fixing Bugs is My life. Welcome to My world.
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href="#about" style={{ color: "white" }}>
            Learn More
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
