import React from "react";
import "./ContactUs.css";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="contactus">
      <section class="bg-[#f2ede8]">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-extrabold text-[#585757] font-['Gilroy']">
              Visit Our Location
            </h1>
          </div>

          <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.456961431141!2d151.2118307!3d-33.8778833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae17b85a3b55%3A0x456c0873e0d1b613!2s1%2F16%20Wentworth%20Ave%2C%20Surry%20Hills%20NSW%202010!5e0!3m2!1sen!2sau!4v1716341250377!5m2!1sen!2sau" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden font-['Gilroy']">
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p class="mt-1 text-gray-600">
                      1/16 Wentworth Ave, Surry Hills NSW
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                    <p class="mt-1 text-gray-600">7am - 4pm</p>
                    <p class="mt-1 text-gray-600">7 days a week</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                    <p class="mt-1 text-gray-600">Email: info@lucasloaves.com.au</p>
                    <p class="mt-1 text-gray-600">Phone: +02 8057 9358</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ContactUs;
