import React from 'react';

interface Props {
  name: string;
}

const Icon: React.FC<Props> = ({ name }) => {
  return <img src={`/icons/${name}.svg`} width="40" height="40" alt={name} />;
};

export default Icon;
