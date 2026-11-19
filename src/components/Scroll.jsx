import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on page change. Depends on pathname only, so in-page
// anchors (e.g. /music#videos) keep working.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
