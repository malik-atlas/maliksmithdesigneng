import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About me" title="Vision as architecture">
        <p>
         My work exists at the intersection of complex systems, human behavior, and business strategy. I don't just design products; I architect the ecosystems they inhabit. For over 15 years, I have helped global institutions and tech-forward startups replace operational friction with clarity, transforming enterprise-scale challenges into intuitive, high-velocity experiences.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
           I bridge the gap between &apos;design intent`&apos; and &apos;engineering reality.&apos; By embedding technical constraints into the earliest phases of the design cycle, I ensure that what we build is not only elegant but fundamentally scalable. My focus is on creating design governance that empowers cross-functional teams to move with autonomy and speed, anchored by a singular, unwavering North Star.
          </p>
      
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="24" label="U.S. States visited" />
          <StatListItem value="7" label="Foreign Countries" />
          <StatListItem value="100+" label="Over 100 projects completed" />
        </StatList>
      </Container>
      <Cultures />
    </>
  );
};

export default AboutPage;
