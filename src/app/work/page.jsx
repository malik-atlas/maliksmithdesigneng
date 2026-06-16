import PageIntro from "@/components/PageIntro";
import React from "react";
import Image from "next/image"; 
import Union from "./samples/union-benefits_sm.jpg"; 
import Salesforce from "./samples/salesforce_sm.jpg"; 
import Vanguard from "./samples/vanguard_sm.jpg"; 


import Care4Today1 from "./samples/care4today-1.jpg"; 
import Care4Today2 from "./samples/care4today-2.jpg"; 
import Care4Today3 from "./samples/care4today-3.jpg"; 
import Care4Today4 from "./samples/care4today-4.jpg"; 
import Care4Today5 from "./samples/care4today-5.jpg"; 


import Kratos1 from "./samples/kratos-1.jpg"; 
import Kratos2 from "./samples/kratos-2.jpg"; 


import AARP1 from "./samples/aarp-1.jpg"; 
import AARP2 from "./samples/aarp-2.jpg"; 
import AARP3 from "./samples/aarp-3.jpg"; 



const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Real solutions for real-world problems."
      >
  

        <p class="sample">

          <Image 
            src={Union} 
            alt="Union Benefits" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />
        </p>
        <p class="blurb"><strong>Union Benefits</strong> <br/> With the help of a key AI tool, revamped federal employee benefits platform delivered through a desktop SaaS solution. Featuring a color-coded, intuitive interface designed to simplify access for busy federal workers, reducing stress and helping them effortlessly manage the benefits they earn serving the American public daily.</p>



<p class="sample">

          <Image 
            src={Salesforce} 
            alt="Salesforce Service Catalog" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />
        </p>
        <p class="blurb"><strong>Salesforce - Service Catalog MVP 2</strong> <br/> As the sole UX designer for Salesforce’s Service Catalog, a self-service employee app, I aimed to streamline user flows and introduce a strategic home screen to accelerate task completion. Collaborating with a senior product manager and lead engineer, I identified key use cases, reduced friction in user flows, and designed a targeted home screen, new empty state screens, and toast notifications. After iterating on two to three concepts, the final design was approved for development, refreshing critical interface elements and improving the speed of ticketed request creation and checkout times.</p>





<p class="sample">

          <Image 
            src={Vanguard} 
            alt="Vanguard Investments" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />
        </p>
        <p class="blurb"><strong>Vanguard</strong> <br/> As team lead for Vanguard, the world’s second-largest asset management firm with nearly $8 trillion in assets, I designed retail product pages to convert prospects into 'investor owners' by highlighting the ‘Why Vanguard’ message and investor journey. Collaborating with a UX director, senior product owner, content strategist, and engineering lead, I created user-friendly pages to educate prospects and support informed investment decisions.</p>






<p class="sample">

          <Image 
            src={Care4Today1} 
            alt="Care4Today Sample 1" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />



          <Image 
            src={Care4Today2} 
            alt="Care4Today Sample 2" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />


          <Image 
            src={Care4Today3} 
            alt="Care4Today Sample 3" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />



      <Image 
            src={Care4Today5} 
            alt="Care4Today Sample 5" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />

      <Image 
            src={Care4Today4} 
            alt="Care4Today Sample 4" 
            width={360} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />


</p>


<p class="sample">

      <Image 
            src={Kratos1} 
            alt="Kratos Sample 1" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />

</p> 

<p class="sample">

    <Image 
            src={Kratos2} 
            alt="Kratos Sample 2" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />

</p> 


<p class="sample">
    <Image 
            src={AARP1} 
            alt="AARP Sample 1" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />
</p> 


<p class="sample">
    <Image 
            src={AARP2} 
            alt="AARP Sample 2" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />

</p> 


<p class="sample">
    <Image 
            src={AARP3} 
            alt="AARP Sample 3" 
            width={680} 
            placeholder="blur" // Optional: adds a blur-up effect while loading
          />


        </p>















      </PageIntro>
    </>
  );
};

export default WorkPage;
