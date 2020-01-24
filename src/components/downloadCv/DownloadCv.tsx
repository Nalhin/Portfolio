import React from 'react';
import { useTranslation } from 'react-i18next';
import { isBrowser } from '../../utils/isBrowser';

interface Props {
  Component: (props: { onClick: () => void }) => React.ReactNode;
}

const DownloadCv: React.FC<Props> = ({ Component }) => {
  const { i18n } = useTranslation();
  const handleClick = () => {
    if (isBrowser) {
      window.open(`${window.location.origin}/cv/${i18n.language}`, '_blank');
    }
  };
  return <>{Component({ onClick: handleClick })}</>;
};

export default DownloadCv;
