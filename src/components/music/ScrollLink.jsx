// In-page anchor with smooth scrolling (instant when the user prefers reduced motion).
// Target sections need a scroll-margin (e.g. scroll-mt-24) so the sticky navbar doesn't cover them.
const ScrollLink = ({ to, children, ...props }) => {
  const handleClick = (e) => {
    const target = document.getElementById(to);
    if (!target) return; // fall back to the plain #hash jump
    e.preventDefault();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ScrollLink;
