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
// HTML Website Integration (Site Key - Public)
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LdT_j0sAAAAAPIHWPzFgj5zC0Mmy7crrPPL_Tae";

// Server Side Integration (Secret Key - Private)
// NOTE: This secret key should ONLY be used on your backend server for token verification
// DO NOT expose this key in frontend code. Store it securely in your backend environment variables.
// Secret Key: 6LdT_j0sAAAAAOh5H9QcyBPU2q0n9EOgCawuEdRg