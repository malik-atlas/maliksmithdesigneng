import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My culture"
        title="Balancing passion for technology with a passion for life."
        invert
      >
        <p>
          I operate on a few core values that are simple but powerful. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Empathy" invert>
            By understanding the mental models of customers, I can empathize more accurately. 
          </GridListItem>
          <GridListItem title="Technical Constraints" invert>
            Working closely with engineering leads, I am able to deliver functional design specs from day one. 
          </GridListItem>
          <GridListItem title="Teamwork" invert>
            Nothing gets built in a silo so it's important to align with stakeholders on how disparate prioirites can still intersect at a single north star vision. 
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
