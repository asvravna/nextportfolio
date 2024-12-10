// src/components/InteractiveImage.js
"use client"; // This is important
'use client';

import React from 'react';
import Image from 'next/image';
// import Image from 'images';

const InteractiveImage = ({ src, alt, className, width, height, onClick }) => (
  <Image
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
    onClick={onClick}
  />
);

export default InteractiveImage;
