import React from "react";

const Tradition: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-end px-8 sm:px-20 pt-16 sm:pt-36 pb-40 sm:pb-80 mt-0 ml-0 sm:ml-3 bg-red-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="/images/tradition-decoration.png"
          alt="Decorative element"
          className="object-contain mb-0 aspect-[1.31] w-[38px] max-md:mb-2.5"
        />
      </div>
      <div className="flex flex-col px-4 pr-5 sm:pr-20 pb-12 sm:pb-24 pl-4 w-full bg-red-900 max-md:pr-5 max-md:max-w-full">
        <div className="z-10 mt-0 w-full max-w-[1078px] max-md:mt-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-full sm:w-[63%] max-md:ml-0 max-md:w-full">
              <img
                src="/images/tradition-food.png"
                alt="Traditional food"
                className="object-contain grow w-full aspect-[1.48] max-md:mt-4 max-md:max-w-full"
              />
            </div>
            <div className="ml-0 sm:ml-5 w-full sm:w-[37%] max-md:ml-0 max-md:w-full">
              <h2 className="self-stretch my-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-center text-orange-500 max-md:mt-10 max-md:text-4xl font-['Beginning_Joy_Bold']">
                Where tradition <br />
                meets taste
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradition;
