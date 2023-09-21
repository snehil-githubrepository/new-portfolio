import React, { useState, useRef, useEffect } from "react";
import { SocialIcons } from "../Header/HeaderStyles";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: "smooth" });
  // };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>

      <SectionText style={{ fontFamily: "cursive" }}>
        <hr />
        <br />
        📌 UG at Vellore Institute of Technology. <br />
        📌 B.Tech in Computer Science & Engineering. <br />
        📌 I expertise in React.js and Next.js, creating dynamic and
        user-friendly applications. Proficient in the MERN stack <br />
        📌I excel in database design, RESTful APIs, and front-end development. I
        prioritize clean code, continuous learning, and knowledge sharing
        through blogging.
        <br />
        📌 Let's collaborate and bring your web projects to life! <br />
        📌 Proficient in C++, Javascript, React, Node, Next
        <br />
        <br />
        <hr />
        <span style={{ fontFamily: "-moz-initial", fontSize: "3.5rem" }}>
          CGPA = 8.4
        </span>
        <hr />
        <br />
        <br />
        <span style={{ fontStyle: "oblique", fontWeight: "bold" }}>
          {" "}
          Links to My DSA skills
        </span>{" "}
        <br />
        <SocialIcons href="https://leetcode.com/SN3HIL/">
          <span style={{ color: "#FFFF00" }}>📌 LeetCode</span>
          <br />
        </SocialIcons>
        <SocialIcons href="https://auth.geeksforgeeks.org/user/sn3hil/">
          <span style={{ color: "#39FF14" }}>📌 GeeksForGeeks</span>
          <br />
        </SocialIcons>
        <SocialIcons href="https://www.codechef.com/users/snehil_880">
          <span style={{ color: "#A0522D" }}>📌 Codechef</span>
        </SocialIcons>
        <br />
        <br />
        <span style={{ fontStyle: "italic" }}>
          Address : <span style={{ color: "#3eb489" }}>VIT Hostel</span> <br />
          Email :{" "}
          <span style={{ color: "#6495ED" }}>isnehilsharma@gmail.com</span>{" "}
          <br />
          Phone : <span style={{ color: "#DFFF00" }}>+91-62660-87619</span>{" "}
        </span>
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
