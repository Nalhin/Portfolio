import { useLayoutEffect, useState } from 'react';
import { isBrowser } from '../../utils/isBrowser';
import throttle from 'lodash/throttle';

const throttleTimer = 300;

export const useDimensions = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };
  const throttled = throttle(updateSize, throttleTimer);

  if (isBrowser) {
    useLayoutEffect(() => {
      window.addEventListener('resize', throttled);
      updateSize();
      return () => window.removeEventListener('resize', throttled);
    }, []);
  }
  return size;
};
