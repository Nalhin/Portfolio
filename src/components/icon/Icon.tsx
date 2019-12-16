import React from 'react';

interface Props {
  name: string;
  src: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<Props> = ({ name, src, width = 40, height = 40 }) => {
  return (
    <img src={`/icons/${src}.svg`} width={width} height={height} alt={name} />
  );
};

export default Icon;
