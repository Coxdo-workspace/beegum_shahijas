import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex self-end mt-12 sm:mt-20 w-full text-base sm:text-lg leading-4 text-center text-amber-200 max-w-[1241px] px-4 max-md:mt-10 max-md:max-w-full">
      <div className="z-10 flex-auto self-start mr-0 border border-amber-200 border-solid h-[3px] max-md:max-w-full" />
      <p className="flex-auto w-full sm:w-[631px] max-md:max-w-full">
        2025 Beegum Shahijas. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
