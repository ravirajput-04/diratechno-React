// src/config/seoConfig.ts

interface SEOContent {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
}

// Default SEO
const defaultSEO: SEOContent = {
  title: "Dira Techno | Web, Mobile & Automation Solutions",
  description:
    "Dira Techno is a global software company delivering innovative web, mobile, and automation solutions for businesses worldwide.",
  keywords:
    "Dira Techno, IT solutions, software development, web apps, mobile apps, automation, RPA, cloud, DevOps",
  canonical: "https://www.dira-techno.com/",
};

// SEO configuration for all pages
const seoConfig: Record<string, SEOContent> = {
  home: {
    title: "Dira Techno | Web, Mobile & Automation Solutions",
    description:
      "Dira Techno delivers innovative web, mobile, and automation solutions for logistics and businesses worldwide.",
    keywords:
      "Dira Techno, web development, mobile apps, automation, RPA, logistics solutions, IT services",
    canonical: "https://www.dira-techno.com/",
  },
  about: {
    title: "About Us | Dira Techno",
    description:
      "Learn about Dira Techno’s 15+ years of experience providing cutting-edge automation and IT solutions for businesses globally.",
    keywords:
      "Dira Techno, about us, IT solutions, automation, RPA, web development, mobile apps",
    canonical: "https://www.dira-techno.com/about",
  },
  services: {
    title: "Services | Dira Techno",
    description:
      "Explore Dira Techno’s web, mobile, and automation services designed for logistics and business process optimization.",
    keywords:
      "Dira Techno, services, RPA, automation, web development, mobile apps, cloud, DevOps",
    canonical: "https://www.dira-techno.com/services",
  },
  careers: {
    title: "Careers | Dira Techno",
    description:
      "Join Dira Techno and be part of a team delivering innovative web, mobile, and automation solutions globally.",
    keywords:
      "Dira Techno, careers, jobs, hiring, IT solutions, software development, automation",
    canonical: "https://www.dira-techno.com/careers",
  },
  "contact-us": {
    title: "Contact Us | Dira Techno",
    description:
      "Get in touch with Dira Techno for inquiries about web, mobile, and automation solutions tailored for your business.",
    keywords:
      "Dira Techno, contact, inquiries, IT solutions, web development, mobile apps, automation",
    canonical: "https://www.dira-techno.com/contact-us",
  },
  "privacy-policy": {
    title: "Privacy Policy | Dira Techno",
    description:
      "Read Dira Techno’s privacy policy to understand how we collect, use, and protect your data when using our services.",
    keywords:
      "Dira Techno, privacy policy, data protection, GDPR, user privacy",
    canonical: "https://www.dira-techno.com/privacy-policy",
  },
  "apply-form": {
    title: "Apply | Dira Techno",
    description:
      "Submit your application to join Dira Techno and become part of a team delivering innovative IT and automation solutions.",
    keywords:
      "Dira Techno, apply, careers, jobs, hiring, automation, web development",
    canonical: "https://www.dira-techno.com/apply-form",
  },
  // Service Pages
  "devops-and-cloud-services": {
    title: "DevOps & Cloud Services | Dira Techno",
    description:
      "Dira Techno offers CI/CD, IaC (Terraform, Ansible), containerization, cloud migration (AWS, Azure, GCP), and monitoring solutions.",
    keywords:
      "DevOps, Cloud Services, CI/CD, Terraform, Ansible, Docker, Kubernetes, AWS, Azure, GCP, monitoring",
    canonical: "https://www.dira-techno.com/devops-and-cloud-services",
  },
  "cloud-consulting-and-managed-services": {
    title: "Cloud Consulting & Managed Services | Dira Techno",
    description:
      "Expert cloud architecture design, multi-cloud/hybrid setups, 24/7 monitoring, disaster recovery, and cost optimization.",
    keywords:
      "Cloud consulting, managed services, cloud architecture, disaster recovery, monitoring, AWS, Azure, GCP",
    canonical:
      "https://www.dira-techno.com/cloud-consulting-and-managed-services",
  },
  "web-application-development": {
    title: "Web Application Development | Dira Techno",
    description:
      "Custom ERP, CRM, e-commerce, dashboards; frontend & backend development; API integration; SaaS application development.",
    keywords:
      "Web development, ERP, CRM, dashboards, frontend, backend, Node.js, React, Vue, Angular, SaaS",
    canonical: "https://www.dira-techno.com/web-application-development",
  },
  "mobile-application-development": {
    title: "Mobile Application Development | Dira Techno",
    description:
      "Cross-platform (Flutter, React Native) and native mobile apps; backend integration; app deployment; UI/UX design and prototyping.",
    keywords:
      "Mobile apps, Flutter, React Native, iOS, Android, MBaaS, app deployment, UI/UX, mobile development",
    canonical: "https://www.dira-techno.com/mobile-application-development",
  },
  "agency-partnership": {
    title: "Agency Partnership Services | Dira Techno",
    description:
      "Partner with Dira Techno to deliver projects under your brand with strong backend and IT expertise without in-house dev team.",
    keywords:
      "Agency partnership, white-label, backend partner, IT solutions, web, mobile, SaaS, project delivery",
    canonical: "https://www.dira-techno.com/agency-partnership",
  },
  "white-label-development-services": {
    title: "White-Label Development Services | Dira Techno",
    description:
      "Deliver web, mobile, and SaaS solutions to your clients under your brand with Dira Techno’s backend expertise.",
    keywords:
      "White-label, agency, web development, mobile apps, SaaS, backend partner, IT solutions",
    canonical: "https://www.dira-techno.com/white-label-development-services",
  },
  "dedicated-developers": {
    title: "Resource Augmentation / Dedicated Developers | Dira Techno",
    description:
      "Hire dedicated frontend, backend, mobile, and DevOps engineers for hourly, part-time, full-time, or project-based models.",
    keywords:
      "Dedicated developers, resource augmentation, frontend, backend, mobile, DevOps, hourly, full-time, part-time",
    canonical: "https://www.dira-techno.com/dedicated-developers",
  },
  "devops-and-cloud-partnership": {
    title: "DevOps & Cloud Partnership | Dira Techno",
    description:
      "Enterprise-level backend cloud & DevOps expertise including CI/CD, IaC, containerization, cloud migration, monitoring, and security.",
    keywords:
      "DevOps partnership, cloud services, CI/CD, IaC, Terraform, Kubernetes, AWS, Azure, GCP",
    canonical: "https://www.dira-techno.com/devops-and-cloud-partnership",
  },
  "maintenance-and-support-services": {
    title: "Maintenance & Support Services | Dira Techno",
    description:
      "Post-launch web and app maintenance, cloud cost monitoring, performance tuning, and 24/7 support for long-term success.",
    keywords:
      "Maintenance, support, web apps, mobile apps, cloud monitoring, performance tuning, 24/7 support",
    canonical: "https://www.dira-techno.com/maintenance-and-support-services",
  },
  "custom-solutions-and-white-label-saas": {
    title: "Custom Solutions & White-Label SaaS | Dira Techno",
    description:
      "Ready-to-use mini-ERP, CRM, eCommerce, and industry-specific SaaS products for agencies to launch under their own brand.",
    keywords:
      "Custom solutions, white-label SaaS, mini-ERP, CRM, eCommerce, SaaS products, agencies, IT solutions",
    canonical:
      "https://www.dira-techno.com/custom-solutions-and-white-label-saas",
  },

  // Default fallback
  default: defaultSEO,
};

export default seoConfig;
