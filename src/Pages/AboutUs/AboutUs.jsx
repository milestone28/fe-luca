import React from "react";
import "./AboutUs.css";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import luca from "../../Components/Assets/luca.png";
import luca_class from "../../Components/Assets/luca_class.png";
import sourdough from "../../Components/Assets/the_sourdough.png";
import { Link } from "react-router-dom";
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
              <p class="tracking-wide  text-xl font-['Roboto'] leading-8 text-white">
                Luca commenced his career as a lifeguard but was laid off.{" "}
                <br /> He found he enjoyed making bread <br /> and experimented
                and in no time at all had <br /> built up a thriving business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-bookmark-bg py-5">
        {/* <!-- Hero --> */}
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-9 lg:mt-12 font-['Gilroy']">
          {/* <!-- Content --> */}
          <div class="flex flex-1 flex-col items-center lg:items-start text-bookmark-fonts">
            <h2 class=" text-6xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
              Luca
            </h2>
            <p class=" text-2xl text-center lg:text-left mb-6">
              My name is luca, I commenced my career as a lifeguard but was laid
              off. I found the joy of making bread and experimented and in no
              time at all had built up a thriving business.
            </p>
          </div>
          {/* <!-- Image --> */}
          <div class="flex justify-center flex-1 mb-2 md:mb-16 lg:mb-0 z-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 z-auto rounded"
              src={luca}
              alt=""
            />
          </div>
        </div>

        <div class="container flex flex-col lg:flex-row items-center gap-12 mt-9 lg:mt-12 font-['Gilroy']">
          <div class="flex justify-center flex-1 mb-2 md:mb-16 lg:mb-0 z-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded"
              src={sourdough}
              alt=""
            />
          </div>
          <div class="flex flex-1 flex-col items-center lg:items-start text-bookmark-fonts">
            <h2 class=" text-6xl md:text-4 lg:text-6xl text-center lg:text-left mb-6">
              Sourdough Bread
            </h2>
            <p class=" text-xl text-left mb-2">
              <span class="text-center">
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              &nbsp;&nbsp; It has no store/commercial yeast.
            </p>
            <p class=" text-xl text-left mb-2">
              <span class="text-center">
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              &nbsp;&nbsp; Hand kneaded and shaped in-house.
            </p>
            <p class=" text-xl text-left mb-2">
              <span class="text-center ">
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              &nbsp;&nbsp; Prepaired over 14-17hrs.
            </p>
            <p class=" text-xl text-left mb-2">
              <span class="text-center">
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              &nbsp;&nbsp; Organic flour, the water is filtered and the
              electricity used to power the oven is solar powered!.
            </p>
            <p class=" text-xl text-left mb-2">
              <span class="text-center">
                <ion-icon name="checkmark-outline"></ion-icon>
              </span>
              &nbsp;&nbsp; Store bought bread is mixed and baked within 2 hours
              meaning the gluten content is really high and can lead to someone
              feeling clogged up when eating bread. Sourdough is a great
              alternative and much easier to digest.
            </p>
          </div>
        </div>

        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-9 lg:mt-12 font-['Gilroy']">
          {/* <!-- Content --> */}
          <div class="flex flex-1 flex-col items-center lg:items-start text-bookmark-fonts">
            <h2 class=" text-6xl md:text-4 lg:text-7xl text-center lg:text-left mb-6">
              Classes
            </h2>
            <p class=" text-2xl text-center lg:text-left mb-2">
              We also offer Sourdough breadmaking classes: <br /> First Saturday
              of every month. 9am to 5pm with lunch provided. <br />
              Learn to make your own bread for only $350 plus GST.
            </p>
            <Link
              to="/contactus"
              class="text-center bg-bookmark-fonts text-white rounded-2xl w-1/2 py-2 mt-6 transition duration-300 ease-in-out transform hover:text-gray-500 hover:bg-white hover:scale-105 hover:border-gray-400 hover:border-2"
            >
              Contact Us
            </Link>
          </div>
          {/* <!-- Image --> */}
          <div class="flex justify-center flex-1 mb-2 md:mb-16 lg:mb-0 z-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 z-auto rounded"
              src={luca_class}
              alt=""
            />
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AboutUs;
