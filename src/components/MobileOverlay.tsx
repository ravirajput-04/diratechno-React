import { Link } from "react-router-dom";
import { useState } from 'react';

interface MobileOverlayProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

function MobileOverlay({ isOpen, setIsOpen }: MobileOverlayProps) {
    const [activeSubmenus, setActiveSubmenus] = useState<Record<string, boolean>>({});

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-overflow');
    };

    const toggleSubmenu = (menuKey: string) => {
        setActiveSubmenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    // Don't render if not open
    if (!isOpen) return null;

    return (
        <>
            {/* Mobile Menu Overlay */}
            <div className="mobile-menu-overlay active">
                <div className="mobile-menu-overlay__inner">
                    <div className="mobile-menu-overlay__header">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-8">
                                    {/* logo */}
                                    <div className="logo">
                                        <Link to="/" onClick={closeMenu}>
                                            <img src="/assets/images/logo/dt-logo.png" className="img-fluid" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-4">
                                    {/* mobile menu content */}
                                    <div className="mobile-menu-content text-end">
                                        <button
                                            className="mobile-navigation-close-icon"
                                            onClick={closeMenu}
                                            style={{
                                                cursor: 'pointer',
                                                background: 'none',
                                                border: 'none',
                                                fontSize: '24px'
                                            }}
                                        >

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-overlay__body">
                        <nav className="offcanvas-navigation">
                            <ul>
                                <li>
                                    <Link to="/" onClick={closeMenu}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                                </li>
                                <li className={`has-children ${activeSubmenus.services ? 'active' : ''}`}>
                                    <div
                                        className="submenu-toggle"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex start', gap: '50px' }}
                                    >
                                        {/* Direct link in the Services heading */}
                                        <Link
                                            to="/services"
                                            onClick={closeMenu}
                                            style={{ color: 'white', fontSize: '16px', fontWeight: '600', textDecoration: 'none', padding: '12px 0' }}
                                        >
                                            Services
                                        </Link>
                                        <span
                                            className="dropdown-arrow"
                                            style={{ color: 'white', fontSize: '26px', fontWeight: '600', cursor: 'pointer' }}
                                            onClick={() => toggleSubmenu('services')}
                                        >
                                            {activeSubmenus.services ? '▲' : '▼'}
                                        </span>
                                    </div>

                                    <ul className="sub-menu" style={{ display: activeSubmenus.services ? 'block' : 'none' }}>
                                        <li>
                                            <Link to="/devops-and-cloud-services" onClick={closeMenu}>
                                                <span>DevOps &amp; Cloud Services</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cloud-consulting-and-managed-services" onClick={closeMenu}>
                                                <span>Cloud Consulting &amp; Managed Services</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/web-application-development" onClick={closeMenu}>
                                                <span>Web Application Development</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/mobile-application-development" onClick={closeMenu}>
                                                <span>Mobile Application Development</span>
                                            </Link>
                                        </li>
                                        <li className={`has-children ${activeSubmenus.agencyPartnership ? 'active' : ''}`}>
                                            <div className="submenu-toggle " style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '50px' }}>
                                                <Link
                                                    to="/agency-partnership"
                                                    onClick={closeMenu}
                                                    style={{ color: 'white', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}
                                                >
                                                    Agency Partnership
                                                </Link>
                                                <span
                                                    className="dropdown-arrow"
                                                    style={{ color: 'white', fontSize: '26px', fontWeight: '600', cursor: 'pointer' }}
                                                    onClick={() => toggleSubmenu('agencyPartnership')}
                                                >
                                                    {activeSubmenus.agencyPartnership ? '▲' : '▼'}
                                                </span>
                                            </div>

                                            <ul className="sub-menu" style={{ display: activeSubmenus.agencyPartnership ? 'block' : 'none' }}>
                                                <li>
                                                    <Link to="/white-label-development-services" onClick={closeMenu}>
                                                        <span>White-Label Development Services</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dedicated-developers" onClick={closeMenu}>
                                                        <span>Dedicated Developers</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/devops-and-cloud-partnership" onClick={closeMenu}>
                                                        <span>DevOps &amp; Cloud Partnership</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/maintenance-and-support-services" onClick={closeMenu}>
                                                        <span>Maintenance &amp; Support Services</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/custom-solutions-and-white-label-saas" onClick={closeMenu}>
                                                        <span>Custom Solutions &amp; White-Label SaaS</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/careers" onClick={closeMenu}><span>Careers</span></Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >
            </div >
        </>
    );
}

export default MobileOverlay;