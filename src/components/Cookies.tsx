import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

type Category = "necessary" | "analytics" | "marketing" | "preferences";

function Cookies() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [showBanner, setShowBanner] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Category toggles
    const [analytics, setAnalytics] = useState<boolean>(true);
    const [marketing, setMarketing] = useState<boolean>(false);
    const [preferences, setPreferences] = useState<boolean>(true);

    useEffect(() => {
        if (!cookies.cookiesAccepted) {
            setShowBanner(true);
        }
    }, [cookies]);

    // Helper: Delete unwanted cookies
    const deleteUnwantedCookies = (acceptedCategories: Category[]): void => {
        const allCookies: string[] = document.cookie
            .split(";")
            .map((c) => c.split("=")[0].trim());

        const isAllowed = (cookieName: string): boolean => {
            if (acceptedCategories.includes("analytics")) {
                if (["_ga", "_gid"].includes(cookieName)) return true;
            }
            if (acceptedCategories.includes("marketing")) {
                if (["_fbp", "fr"].includes(cookieName)) return true;
            }
            return false;
        };

        allCookies.forEach((cookieName: string) => {
            if (!isAllowed(cookieName) && cookieName !== "cookiesAccepted") {
                removeCookie(cookieName, { path: "/" });
            }
        });
    };

    const saveCookies = (acceptedCategories: Category[]): void => {
        setCookie("cookiesAccepted", acceptedCategories.join(","), {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });

        deleteUnwantedCookies(acceptedCategories);
        setShowBanner(false);
        setModalOpen(false); // Close modal when saving preferences
    };

    const handleAcceptAll = (): void => {
        setAnalytics(true);
        setMarketing(true);
        setPreferences(true);
        saveCookies(["necessary", "analytics", "marketing", "preferences"]);
    };

    const handleRejectAll = (): void => {
        setAnalytics(false);
        setMarketing(false);
        setPreferences(false);
        saveCookies(["necessary"]);
    };

    const handleAcceptSelected = (): void => {
        const selected: Category[] = ["necessary"];
        if (analytics) selected.push("analytics");
        if (marketing) selected.push("marketing");
        if (preferences) selected.push("preferences");

        saveCookies(selected);
    };

    const selectedText: string = [
        "Necessary",
        analytics && "Analytics",
        marketing && "Marketing",
        preferences && "Preferences",
    ]
        .filter(Boolean)
        .join(", ");

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Consent Banner */}
            <div className="cookies-consent">
                <div className="cookies-text">
                    <h3 className="cookies-title">
                        <i className="fas fa-cookie-bite cookies-icon" /> We value your
                        privacy
                    </h3>
                    <p>
                        We use cookies to enhance your browsing experience, serve
                        personalized content, and analyze our traffic.
                    </p>
                    <p>
                        By clicking "Accept All", you consent to our use of cookies. You can
                        customize your preferences in the settings.
                    </p>
                </div>
                <div className="cookies-buttons">
                    <button
                        className="cookies-button cookies-button-preferences"
                        onClick={() => setModalOpen(true)}
                    >
                        Preferences
                    </button>
                    <button
                        className="cookies-button cookies-button-accept"
                        onClick={handleAcceptAll}
                    >
                        Accept All
                    </button>
                </div>
            </div>

            {/* Preferences Modal */}
            {modalOpen && (
                <div
                    className="cookies-modal-overlay active"
                    onClick={(e) =>
                        (e.target as HTMLElement).classList.contains("cookies-modal-overlay") &&
                        setModalOpen(false)
                    }
                >
                    <div className="cookies-modal">
                        <div className="cookies-modal-header">
                            <h2 className="cookies-modal-title">Cookie Preferences</h2>
                            <button
                                className="cookies-modal-close"
                                onClick={() => setModalOpen(false)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="cookies-modal-body">
                            {/* Necessary */}
                            <div className="cookies-category">
                                <div className="cookies-category-header">
                                    <h3 className="cookies-category-title">Necessary Cookies</h3>
                                    <span className="cookies-category-required">Always Active</span>
                                </div>
                                <p className="cookies-category-content">
                                    These cookies are essential for the website to function.
                                </p>
                            </div>

                            {/* Analytics */}
                            <div className="cookies-category">
                                <div className="cookies-category-header">
                                    <h3 className="cookies-category-title">Analytics Cookies</h3>
                                    <label className="cookies-category-toggle">
                                        <input
                                            type="checkbox"
                                            checked={analytics}
                                            onChange={(e) => setAnalytics(e.target.checked)}
                                        />
                                        <span className="cookies-category-slider" />
                                    </label>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div className="cookies-category">
                                <div className="cookies-category-header">
                                    <h3 className="cookies-category-title">Marketing Cookies</h3>
                                    <label className="cookies-category-toggle">
                                        <input
                                            type="checkbox"
                                            checked={marketing}
                                            onChange={(e) => setMarketing(e.target.checked)}
                                        />
                                        <span className="cookies-category-slider" />
                                    </label>
                                </div>
                            </div>

                            {/* Preferences */}
                            <div className="cookies-category">
                                <div className="cookies-category-header">
                                    <h3 className="cookies-category-title">
                                        Preferences Cookies
                                    </h3>
                                    <label className="cookies-category-toggle">
                                        <input
                                            type="checkbox"
                                            checked={preferences}
                                            onChange={(e) => setPreferences(e.target.checked)}
                                        />
                                        <span className="cookies-category-slider" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="cookies-modal-footer">
                            <div className="cookies-modal-selected">
                                Selected: {selectedText}
                            </div>
                            <div className="cookies-modal-buttons">
                                <button
                                    className="cookies-modal-button cookies-modal-button-reject"
                                    onClick={handleRejectAll}
                                >
                                    Reject All
                                </button>
                                <button
                                    className="cookies-modal-button cookies-modal-button-accept"
                                    onClick={handleAcceptSelected}
                                >
                                    Accept Selected
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cookies;