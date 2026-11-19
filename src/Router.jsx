import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Experience from './pages/Experience';

// /music is a standalone landing (shared from Instagram) with its own fonts and
// Instagram scripts, so it's split into its own chunk.
const Music = lazy(() => import('./pages/Music'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/music"
        element={
          <Suspense fallback={<div className="min-h-screen bg-stage-950" />}>
            <Music />
          </Suspense>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
