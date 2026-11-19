import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* Translations load over HTTP; render nothing until they're ready. */}
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);
