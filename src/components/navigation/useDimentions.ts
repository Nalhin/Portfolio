import { useLayoutEffect, useState } from 'react';
import { isBrowser } from '../../utils/isBrowser';

export const useDimensions = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  if (isBrowser) {
    useLayoutEffect(() => {
      function updateSize() {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }
  return size;
};
