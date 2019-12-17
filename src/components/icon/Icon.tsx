import React from 'react';

interface Props {
  name?: string;
  src: string;
  width?: string;
  height?: string;
  directory?: string;
  className?: string;
}

const Icon: React.FC<Props> = ({
  name,
  src,
  className,
  directory,
  width = 40,
  height = 40,
}) => {
  return (
    <img
      src={directory ? `/icons/${directory}/${src}.svg` : `/icons/${src}.svg`}
      width={width}
      height={height}
      alt={name ?? src}
      className={className}
    />
  );
};

export default Icon;
