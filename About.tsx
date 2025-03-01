import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-start pt-9 px-4 pr-4 sm:pr-10 lg:pr-20 mt-6 w-full bg-rose-950 max-md:max-w-full">
      <div className="flex z-10 flex-wrap gap-5 justify-between items-start ml-0 sm:ml-5 max-w-full text-5xl sm:text-6xl lg:text-7xl leading-none text-amber-200 whitespace-nowrap w-full sm:w-[680px] max-md:text-4xl">
        <img
          src="/images/about-decoration-1.png"
          alt="Decorative element"
          className="object-contain shrink-0 self-end mt-8 sm:mt-16 w-32 sm:w-44 max-w-full aspect-[1.27] max-md:mt-10"
        />
        <h2 className="self-start font-['Beginning_Joy_Bold']">About</h2>
      </div>
      <p className="z-10 mr-px text-xl sm:text-2xl font-semibold leading-8 sm:leading-10 text-amber-200 max-md:max-w-full mt-6 sm:mt-8">
        Beegum Shahijas specializes in sweet roasted rice powders, offering a
        versatile product that can serve as both a meal and a snack. The
        business is deeply rooted in tradition, emphasizing authenticity,
        homemade preparation, and high-quality ingredients. Their offerings
        cater to customers seeking a healthy, natural, and flavorful food
        option. The brand was founded with the intention of sharing the warmth
        and tradition of Kerala's kitchens, focusing on healthy, homemade
        recipes passed down through generations. The sweet roasted rice powder
        is a product of this heritage, symbolizing both nostalgia and innovation
        for modern consumers.
      </p>
      <div className="flex z-10 flex-wrap gap-5 justify-between self-end mt-8 mb-0 w-full max-w-[1020px] max-md:mb-2.5 max-md:max-w-full">
        <img
          src="/images/about-decoration-2.png"
          alt="Decorative element"
          className="object-contain shrink-0 self-end mt-16 sm:mt-36 max-w-full aspect-[0.98] w-[120px] sm:w-[156px] max-md:mt-10"
        />
        <div className="flex gap-px items-start">
          <img
            src="/images/about-decoration-3.png"
            alt="Decorative element"
            className="object-contain shrink-0 self-start max-w-full aspect-[0.99] w-[120px] sm:w-[157px]"
          />
          <img
            src="/images/about-decoration-4.png"
            alt="Decorative element"
            className="object-contain shrink-0 self-end mt-16 sm:mt-40 max-w-full aspect-[1.27] w-[140px] sm:w-[186px] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
