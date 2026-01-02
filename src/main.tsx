import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { RECAPTCHA_SITE_KEY } from './config/apiConfig';


const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        {RECAPTCHA_SITE_KEY ? (
          <GoogleReCaptchaProvider
            reCaptchaKey={RECAPTCHA_SITE_KEY}
            language="en"
            useRecaptchaNet={true}
            useEnterprise={false}
            scriptProps={{
              async: true,
              defer: true,
              appendTo: "head",
            }}
          >
            <App />
          </GoogleReCaptchaProvider>
        ) : (
          <App />
        )}
      </HelmetProvider>
    </StrictMode>
  );
}
