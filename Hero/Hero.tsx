import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="self-end mt-10 w-full max-w-[1362px] px-4 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="mr-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.2] lg:leading-[93px] text-rose-950 max-md:mr-2.5 max-md:max-w-full font-['Beginning_Joy_Bold']">
              A Taste of Tradition, <br className="hidden sm:block" />A Touch of
              Health
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-black max-md:max-w-full">
              At Beegum Shahijas, we bring you the finest sweet roasted rice
              powders – a versatile product that serves as both a wholesome meal
              and a delightful snack. Rooted in the heart of Kerala's culinary
              traditions, our brand combines authenticity, quality, and
              compassion, offering a nutritious and flavorful food option that
              is both comforting and innovative.
            </p>
            <div className="flex flex-wrap gap-5 mt-9 max-w-full text-lg sm:text-xl w-full sm:w-[383px]">
              <button className="gap-2.5 self-stretch px-5 sm:px-7 py-2.5 font-medium text-orange-100 rounded-xl border border-solid bg-rose-950 border-rose-950 hover:bg-rose-900 transition-colors">
                Order Now
              </button>
              <button className="gap-2.5 self-stretch px-5 sm:px-7 py-2.5 rounded-xl border border-solid border-rose-950 text-rose-950 hover:bg-rose-50 transition-colors">
                See All Products
              </button>
            </div>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="/images/hero-image.png"
            alt="Product showcase"
            className="object-contain grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
