// Selected Work. Names are proper nouns; descriptions and category labels are
// translated under home.portfolio.projects.<id> / home.portfolio.categories.<category>.
import prohopoImage from '../assets/img/por1.png';
import adamImage from '../assets/img/por2.png';

// Highlighted on its own row. No public link: it's a client's internal configurator.
export const featuredProject = {
  id: 'bikespezl',
  title: 'BikeSPEZL',
  category: 'cloud',
  stack: ['AWS', 'EC2', 'Rhino.Compute', 'Grasshopper'],
};

export const heroProjects = [
  {
    id: 'prohopo',
    title: 'Prohopo',
    image: prohopoImage,
    link: 'https://www.prohopo.cz/',
    domain: 'prohopo.cz',
    category: 'real_estate',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  },
  {
    id: 'adam_ruzicka',
    title: 'Adam Růžička',
    image: adamImage,
    link: 'https://www.adamruzickareality.cz/',
    domain: 'adamruzickareality.cz',
    category: 'real_estate',
    stack: ['JavaScript', 'HTML/CSS', 'PHP'],
  },
];

export const gridProjects = [
  { id: 'cayman', title: 'Cayman Travel', link: 'https://caymantravel.eu/', domain: 'caymantravel.eu', category: 'travel', stack: ['WordPress', 'FareHarbor'] },
  { id: 'fencee', title: 'Fencee', link: 'https://www.fencee.cz', domain: 'fencee.cz', category: 'ecommerce', stack: ['PHP', 'JavaScript', 'MySQL'] },
  { id: 'dogtrace', title: 'Dogtrace', link: 'https://www.dogtrace.com/', domain: 'dogtrace.com', category: 'ecommerce', stack: ['PHP', 'JavaScript', 'MySQL'] },
  { id: 'sysel_polak', title: 'Sysel Polak', link: 'https://www.sysel-polak.cz/', domain: 'sysel-polak.cz', category: 'corporate', stack: ['PHP', 'JavaScript', 'HTML/CSS'] },
  { id: 'doucebnice', title: 'Doucebnice', link: 'https://www.doucebnice.cz/', domain: 'doucebnice.cz', category: 'education', stack: ['PHP', 'JavaScript', 'MySQL'] },
  { id: 'autojeraby', title: 'Autojeraby Horak', link: 'https://www.autojerabyhorak.cz/', domain: 'autojerabyhorak.cz', category: 'services', stack: ['PHP', 'JavaScript', 'HTML/CSS'] },
  { id: 'starlux', title: 'Starlux', link: 'https://www.starlux.cz/', domain: 'starlux.cz', category: 'ecommerce', stack: ['PHP', 'JavaScript', 'MySQL'] },
  { id: 'chytre_strechy', title: 'Chytré střechy', link: 'https://www.chytrestrechy.cz/', domain: 'chytrestrechy.cz', category: 'services', stack: ['PHP', 'JavaScript', 'HTML/CSS'] },
  { id: 'veterinar', title: 'Centrum veterinární péče', link: 'https://www.veterinar-palan.cz/', domain: 'veterinar-palan.cz', category: 'services', stack: ['PHP', 'JavaScript', 'MySQL'] },
  { id: 'grimefighters', title: 'Grime Fighters', link: 'https://grimefighters.ca/', domain: 'grimefighters.ca', category: 'services', stack: ['HTML/CSS', 'JavaScript'] },
  { id: 'pronachem', title: 'Pronachem', link: 'https://www.pronachem.cz/', domain: 'pronachem.cz', category: 'corporate', stack: ['PHP', 'JavaScript', 'HTML/CSS'] },
  { id: 'ekoplant', title: 'Ekoplant', link: 'https://www.ekoplant.cz/', domain: 'ekoplant.cz', category: 'corporate', stack: ['PHP', 'JavaScript', 'HTML/CSS'] },
  { id: 'myjoys', title: 'MYJOYS', link: 'https://www.myjoysbad.de/', domain: 'myjoysbad.de', category: 'ecommerce', stack: ['PHP', 'JavaScript', 'MySQL'] },
];
