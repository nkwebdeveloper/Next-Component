import Image from "next/image";
import {WavyBGView} from '@/components/WavyBGView/WavyBGView';
import {AppleCardsCarouselDemo} from '@/components/CardsCarousel/CardsCarousel';
import {GlobeDemo} from "@/components/Globe/Globe";
import {NavbarMenu} from '@/components/NavbarMenu/NavbarMenu';
import {SpotlightPreview} from '@/components/Spotlight/Spotlight';
import {StickyScrollRevealDemo} from '@/components/StickyScroll/StickyScroll';
import {InfiniteMovingCardsDemo} from '@/components/MovingCards/InfiniteMovingCards';
import {HeroScrollDemo} from '@/components/ScrollAnimation/ScrollAnimation';
import {CardHoverEffectDemo} from '@/components/CardHover/CardHover';

import { Spotlight } from "@/components/Spotlight/SpotlightUI";
import {BackgroundBeamsDemo} from '@/components/BackgroundBeams/BackgroundBeams';
import { BackgroundBeams } from "@/components/BackgroundBeams/background-beams";

import {SidebarDemo} from "@/components/Sidebar/Bar";
export default function Home() {
  return (
    <>



{/* Navbar */}
 <div> 
  <NavbarMenu/> 
  </div>


  {/* Top banner */}
  <div>
{/* <WavyBGView/> */}
<SpotlightPreview/>
</div>


{/* Sticky Scroll */}
<div> <StickyScrollRevealDemo/></div>

{/* Cards Carousel */}
<div>  <AppleCardsCarouselDemo/></div>
<BackgroundBeams />
{/* Scroll Animation */}
 <div className="grid grid-cols md:grid-cols-2 grid-wrap place-items-center">
  <div><HeroScrollDemo/></div>
  <div>
  <h1 className="text-fuchsia-500 text-4xl font-bold">Unleash the power of</h1>
  <p className="text-white pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, beatae reiciendis ad nisi debitis, qui eaque dolorem suscipit eveniet odio magni a nostrum blanditiis, eos iure eius saepe quibusdam. Ut.</p>
  <p className="text-white pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, beatae reiciendis ad nisi debitis, qui eaque dolorem suscipit eveniet odio magni a nostrum blanditiis, eos iure eius saepe quibusdam. Ut.</p>
 </div>
  </div>


{/* Globe */}
  {/* <GlobeDemo/> */}


{/* Moving Cards */}
<div>
<Spotlight
        className="top-50 left-0 md:left-0"
        fill="blue"
      />
  <InfiniteMovingCardsDemo/>


{/* CardHover */}

  <CardHoverEffectDemo/>
</div>


{/* BackgroundBeams */}
<div>
  <BackgroundBeamsDemo/>
</div>


<SidebarDemo/>

</>
  );
}
