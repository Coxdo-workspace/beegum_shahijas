import React from "react";

const Products: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4">
      <h2 className="self-center mt-12 sm:mt-16 text-5xl sm:text-6xl lg:text-7xl leading-none text-rose-950 max-md:mt-10 max-md:text-4xl font-['Beginning_Joy_Bold']">
        Our Products
      </h2>
      <img
        src="/images/products-showcase.png"
        alt="Products showcase"
        className="object-contain z-10 self-center mt-8 sm:mt-12 w-full rounded-none aspect-[4.12] max-w-[1389px] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex relative z-10 flex-col items-start px-px pt-40 sm:pt-80 pb-10 sm:pb-20 w-full min-h-[300px] sm:min-h-[539px] max-md:pt-24 max-md:pr-5 max-md:max-w-full">
        <img
          src="/images/products-background.png"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative shrink-0 max-w-full bg-red-900 h-[80px] sm:h-[140px] w-[80%] sm:w-[763px]" />
      </div>
    </section>
  );
};

export default Products;
