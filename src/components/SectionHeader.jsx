export const Eyebrow = ({ children, className = '' }) => (
  <span
    className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100 ${className}`}
  >
    {children}
  </span>
);

const SectionHeader = ({ eyebrow, title, subtitle, as: Heading = 'h2', className = 'mb-12' }) => (
  <div className={`text-center max-w-3xl mx-auto ${className}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Heading className="section-title">{title}</Heading>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
