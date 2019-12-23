import React from 'react';
import ImagePlaceholder from './Placeholder';

interface Props {
  className?: string;
  alt: string;
  src: string;
  placeholder?: React.ReactNode;
}

const Img: React.FC<Props> = ({ className, alt, src, placeholder }) => {
  const [isLoading, setLoading] = React.useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  React.useEffect(() => {
    const img = new Image();
    img.onload = handleLoaded;
    img.onerror = handleLoaded;
    img.src = src;
  });

  const imagePlaceholder = placeholder ?? <ImagePlaceholder />;
  return (
    <>
      <img
        className={className}
        alt={alt}
        src={src}
        style={{ display: isLoading && 'none' }}
      />
      {isLoading && imagePlaceholder}
    </>
  );
};

export default Img;
