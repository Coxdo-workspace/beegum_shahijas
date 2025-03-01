import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col px-4">
      <h2 className="self-start mt-10 sm:mt-14 ml-4 sm:ml-36 text-5xl sm:text-6xl lg:text-7xl leading-none text-amber-200 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl font-['Beginning_Joy_Bold']">
        Contact
      </h2>
      <div className="self-center mt-8 sm:mt-12 ml-0 sm:ml-5 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-full sm:w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter leading-8 sm:leading-10 text-amber-200 max-md:mt-10">
              <img
                src="/images/location-icon.png"
                alt="Location icon"
                className="object-contain shrink-0 self-start aspect-[1.02] w-[36px] sm:w-[43px]"
              />
              <address className="flex-auto w-full sm:w-[472px] max-md:max-w-full not-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porttitor, nibh eu accumsan pellentesque
              </address>
            </div>
          </div>
          <div className="ml-0 sm:ml-5 w-full sm:w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1.5 w-full font-semibold text-amber-200 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 items-start self-start text-2xl sm:text-3xl lg:text-4xl leading-none">
                <img
                  src="/images/phone-icon.png"
                  alt="Phone icon"
                  className="object-contain shrink-0 aspect-[1.02] w-[36px] sm:w-[42px]"
                />
                <a
                  href="tel:+919990900999"
                  className="flex-auto hover:text-amber-100 transition-colors"
                >
                  +91 99909 00999
                </a>
              </div>
              <div className="flex flex-wrap gap-3 mt-3.5 text-2xl sm:text-3xl lg:text-4xl leading-snug whitespace-nowrap">
                <img
                  src="/images/email-icon.png"
                  alt="Email icon"
                  className="object-contain shrink-0 w-9 sm:w-11 aspect-square"
                />
                <a
                  href="mailto:beegumshahijasgmail.com"
                  className="flex-auto w-full sm:w-[424px] max-md:max-w-full hover:text-amber-100 transition-colors"
                >
                  beegumshahijasgmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
