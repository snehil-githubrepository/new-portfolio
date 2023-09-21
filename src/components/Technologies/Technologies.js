import React from "react";
import { DiFirebase, DiGithub, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Image from "next/image";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Front-end
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <div className="InnerIcons">
            <List>
              <Image
                src="/images/html-5.png"
                alt="React.js Icon"
                title="HTML"
                width={100}
                height={100}
              />

              <Image
                src="/images/css-3.png"
                alt="React.js Icon"
                title="CSS"
                width={100}
                height={100}
              />

              <Image
                src="/images/javascript.png"
                alt="React.js Icon"
                title="javascript"
                width={100}
                height={100}
              />
              <Image
                src="/icons/react.svg"
                alt="React.js Icon"
                title="React Js"
                width={70}
                height={70}
              />
              <Image
                src="/icons/nextjs.svg"
                alt="NextJs Icon"
                title="Next Js"
                width={70}
                height={70}
              />
            </List>
          </div>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <div className="InnerIcons">
            <List>
              <Image
                src="/icons/nodejs.svg"
                alt="React.js Icon"
                title="Node Js"
                width={100}
                height={100}
              />
              <Image
                src="/images/flask1.png"
                alt="React.js Icon"
                title="Flask"
                width={100}
                height={100}
              />
              <Image
                src="/icons/mongodb.svg"
                alt="React.js Icon"
                title="MongoDB"
                width={100}
                height={100}
              />

              <Image
                src="/icons/express.svg"
                alt="React.js Icon"
                title="express"
                width={70}
                height={70}
              />
              <Image
                src="/icons/python.svg"
                alt="React.js Icon"
                title="Python"
                width={100}
                height={100}
              />
            </List>
          </div>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGithub size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <div className="InnerIcons">
            <List>
              <Image
                src="/icons/c.svg"
                alt="React.js Icon"
                title="c"
                width={70}
                height={70}
              />

              <Image
                src="/icons/cpp.svg"
                alt="React.js Icon"
                title="c++"
                width={70}
                height={70}
              />

              <Image
                src="/icons/git.svg"
                alt="React.js Icon"
                title="git"
                width={70}
                height={70}
              />
              <Image
                src="/icons/github.svg"
                alt="React.js Icon"
                title="Github"
                width={70}
                height={70}
              />
              <Image
                src="/icons/postman.svg"
                alt="React.js Icon"
                title="postman"
                width={70}
                height={70}
              />
              <Image
                src="/icons/graphql.svg"
                alt="React.js Icon"
                title="graphql"
                width={70}
                height={70}
              />
              <Image
                src="/icons/docker.svg"
                alt="Docker Icon"
                title="Docker"
                width={70}
                height={70}
              />
            </List>
          </div>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
