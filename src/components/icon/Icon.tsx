import React from 'react';

interface Props {
  name: string;
}

const Icon: React.FC<Props> = ({ name }) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + name} />
    </svg>
  );
};

export default Icon;
