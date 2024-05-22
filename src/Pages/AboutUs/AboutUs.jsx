import React from "react";
import "./AboutUs.css";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const AboutUs = () => {
  return (
    <div>
      <div class="bg-hero-pattern md:bg-cover md:h-full">
        <div className="aboutus-1">
          <div class="grid sm:grid-cols-12 my-16 gap-4">
            <div class="sm:col-span-4">
              <h1 class="text-7xl text-left font-['Gilroy'] font-semibold text-white">
                ABOUT <br /> LUKA's
              </h1>
            </div>

            <div class="sm:col-span-8">
              <p class="tracking-wide  text-xl font-['Roboto'] leading-8 text-white italic">
                Luca commenced his career as a lifeguard but was laid off. <br /> He
                found he enjoyed making bread <br /> and experimented and in no time at
                all had <br /> built up a thriving business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AboutUs;
