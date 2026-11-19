import { BrowserRouter, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './Router';
import ScrollToTop from './components/Scroll';
import { routes, SITE_URL } from './seo/routes';

const PageSEO = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const route = routes.find((r) => r.path === pathname) || routes[0];
  const title = t(`seo.${route.seoKey}.title`);
  const description = t(`seo.${route.seoKey}.description`);
  const url = `${SITE_URL}${route.path}`;

  return (
    <Helmet htmlAttributes={{ lang: i18n.resolvedLanguage || 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={t('common.brand_full')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

// /music renders its own footer (MusicFooter) to match its dark stage design.
const SiteFooter = () => {
  const { pathname } = useLocation();
  return pathname.replace(/\/+$/, '') === '/music' ? null : <Footer />;
};

const App = () => {
  return (
    <BrowserRouter>
      <PageSEO />
      <ScrollToTop />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <RouterComponent />
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
