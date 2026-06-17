import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Principal Value Set"
        title="Balancing passion for technology with a passion for life."
        invert
      >
        <p>
          I operate on a few core values that are simple but powerful. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Systemic Empathy" invert>
I treat empathy as a data-informed discipline. By mapping complex mental models against business logic, I ensure that the product is as sustainable for the company as it is delightful for the user.</GridListItem>
          <GridListItem title="Architectural Literacy" invert>
 I operate as a technical partner to engineering. I speak the language of the stack, which allows me to deliver high-fidelity design specifications that align perfectly with our architectural requirements, reducing technical debt from day one. </GridListItem>
          <GridListItem title="Strategic Alignment" invert>
I specialize in the &apos;intersection of priorities.&apos; In large-scale organizations, competing interests are inevitable. My role is to harmonize these disparate threads into a unified, executive-level vision that keeps the entire organization pointed in the same direction.</GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
