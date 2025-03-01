"use client";

import React, { useEffect } from "react";

const FontSetup: React.FC = () => {
  useEffect(() => {
    // Add Beginning Joy Bold font
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'Beginning Joy Bold';
        src: url('https://fonts.cdnfonts.com/css/beginning-joy') format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      html {
        font-family: 'Beginning Joy Bold', sans-serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default FontSetup;
