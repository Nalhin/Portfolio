import React from 'react';

interface Props {
  name: string;
  src: string;
}

const Icon: React.FC<Props> = ({ name, src }) => {
  return <img src={`/icons/${src}.svg`} width="40" height="40" alt={name} />;
};

export default Icon;
