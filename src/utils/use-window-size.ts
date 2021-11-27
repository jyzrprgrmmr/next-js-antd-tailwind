import { useEffect, useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const [size, setSize] = useState({ width: 0, height: 0 });
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);
  return size;
};
