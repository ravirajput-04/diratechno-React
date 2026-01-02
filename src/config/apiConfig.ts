// src/config/apiConfig.ts

interface ApiEndpoint {
  getUrl(): string;
}

class ContactFormEndpoint implements ApiEndpoint {
  private readonly productionUrl: string;
  private readonly developmentUrl: string;

  constructor(productionUrl: string, developmentUrl?: string) {
    this.productionUrl = productionUrl;
    this.developmentUrl = developmentUrl || "/api/contact";
  }

  getUrl(): string {
    // Use proxy in development, direct URL in production
    if (import.meta.env.DEV) {
      return this.developmentUrl;
    }
    return this.productionUrl;
  }
}

export const API_CONFIG = {
  CONTACT_FORM: new ContactFormEndpoint(
    "https://j5xjsa3taj.execute-api.ap-south-1.amazonaws.com/contact",
    "/api/contact"
  ),
  CAREER_FORM: new ContactFormEndpoint(
    "https://j5xjsa3taj.execute-api.ap-south-1.amazonaws.com/career",
    "/api/career"
  ),
};

// Google reCAPTCHA v3 Site Key
// Get your site key from: https://www.google.com/recaptcha/admin
// 
// IMPORTANT: You need to create a reCAPTCHA v3 site key (not v2)
// 1. Go to https://www.google.com/recaptcha/admin
// 2. Click "+" to create a new site
// 3. Select "reCAPTCHA v3"
// 4. Add your domain (localhost for dev, your domain for production)
// 5. Copy the Site Key and add it to your .env file as VITE_RECAPTCHA_SITE_KEY
//
// Note: Google doesn't provide a public test key for v3 that always works.
// You must create your own reCAPTCHA v3 site key for testing.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Ld0uz0sAAAAADUP6QJ0ThMUA-4Fk36SLkAGVppP";

//SECRET KEY : 6Ld0uz0sAAAAADM5SFEUXiCYuc1MVXpeCJzv3nBk