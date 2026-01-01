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
};

