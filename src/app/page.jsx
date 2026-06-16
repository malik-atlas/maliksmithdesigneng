import Clients from "@/components/Clients";
// import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
// import Services from "@/components/Services";
// import Testimonials from "@/components/Testimonials";
/// import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Malik Smith, Design Engineer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Malik Smith is a design engineer working at the intersection of design
            and technology. With a background in human computer interaction and UX / Product Design, the goal is always to lead with empathy and maximizing human potential. 
          </p>
        </FadeIn>
      </Container>
      <Clients />
      
    </main>
  );
}
