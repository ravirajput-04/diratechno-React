import { Helmet } from "@dr.pogodin/react-helmet";
import { useLocation } from "react-router-dom";
import seoConfig from "../config/seoConfig";

const SEO: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;

    // Normalize path to match keys in seoConfig
    const pageKey = path === "/" ? "home" : path.slice(1).toLowerCase();

    // Get SEO or fallback to default
    const seo = seoConfig[pageKey] ?? seoConfig.default;
    console.log("Current path:", path, ",SEO key:", pageKey);

    return (
        <Helmet>
            <title>{seo.title}</title>
            {/* Dynamically render meta tags */}
            {seo.description && <meta name="description" content={seo.description} />}
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            {seo.canonical && <link rel="canonical" href={seo.canonical} />}
        </Helmet>
    );
};

export default SEO;
