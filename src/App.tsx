import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ApplyForm from './pages/ApplyForm';
import DevopsAndCloudServices from './pages/DevopsAndCloudServices';
import CloudConsultingAndManagedServices from './pages/CloudConsultingAndManagedServices';
import WebApplicationDevelopmentServices from './pages/WebApplicationDevelopmentServices';
import MobileApplicationDevelopmentServices from './pages/MobileApplicationDevelopmentServices';
import AgencyPartnershipServices from './pages/AgencyPartnershipServices';
import WhiteLabelDevelopmentServices from './pages/WhiteLabelDevelopmentServices';
import DedicatedDeveloperServices from './pages/DedicatedDeveloperServices';
import MaintenanceAndSupportServices from './pages/MaintenanceAndSupportServices';
import DevopsAndCloudPartnershipServices from './pages/DevopsAndCloudPartnershipServices';
import CustomSolutionsAndWhiteLabelSaaS from './pages/CustomSolutionsAndWhiteLabelSaaS';
import { CookiesProvider } from 'react-cookie';
import NotFound from './components/NotFound';


function App() {

  return (
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Root />} >
            {/*Main Pages*/}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="apply-form" element={<ApplyForm />} />
            {/*Service Pages*/}
            <Route path="devops-and-cloud-services" element={<DevopsAndCloudServices />} />
            <Route path="cloud-consulting-and-managed-services" element={<CloudConsultingAndManagedServices />} />
            <Route path="web-application-development" element={<WebApplicationDevelopmentServices />} />
            <Route path="mobile-application-development" element={<MobileApplicationDevelopmentServices />} />
            <Route path="agency-partnership" element={<AgencyPartnershipServices />} />
            <Route path="white-label-development-services" element={<WhiteLabelDevelopmentServices />} />
            <Route path="dedicated-developers" element={<DedicatedDeveloperServices />} />
            <Route path="devops-and-cloud-partnership" element={<DevopsAndCloudPartnershipServices />} />
            <Route path="maintenance-and-support-services" element={<MaintenanceAndSupportServices />} />
            <Route path="custom-solutions-and-white-label-saas" element={<CustomSolutionsAndWhiteLabelSaaS />} />

            {/*Catch all - replace with 404 component if you have one*/}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
