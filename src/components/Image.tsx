import React from "react";

interface ImageProps {
  type?: string;
  src: string;
  fallback?: string;
  alt: string | undefined;
}

const Image: React.FC<ImageProps> = ({
  src,
  fallback,
  type = "image/webp",
  alt,
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
