import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About me" title="My strength is collaboration">
        <p>
          <img src="../images/headshot.jpg" alt="Headshot" /> 
         My design philosophy has always been  &quot;strive for creative clarity.&quot; 
         When designers choose the right lens to empathize with users, product experiences
          become moments of functional delight and a true enhancement to their daily lives.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            For over 15 years, I&apos;ve helped cross-functional teams deliver human-centered enterprise and consumer products, apps and websites at scale. My passion for technology, teams and innovation motivate me to keep striving forward. 
          </p>
          <p>
          Throughout my career, I have prided myself on fostering an environment of effective cross-collaboration and a joy for good design and humanity.
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
      <ContactSection />
    </>
  );
};

export default AboutPage;
