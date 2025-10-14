import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileOverlay from "./MobileOverlay";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkSubmenuPosition = () => {
      const submenuElements = document.querySelectorAll('.has-children .submenu');
      submenuElements.forEach(submenu => {
        submenu.classList.add('left');
      });
    };

    checkSubmenuPosition();
    window.addEventListener('resize', checkSubmenuPosition);

    return () => {
      window.removeEventListener('resize', checkSubmenuPosition);
    };
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.classList.add('no-overflow');
  };

  return (
    <>
      {/*====================  header area ====================*/}
      <div className="header-area">
        <div className="header-bottom-wrap header-sticky bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header position-relative">
                  {/* brand logo */}
                  <div className="header__logo">
                    <Link to="/">
                      <img src="/assets/images/logo/dt-logo.png" aria-label="dira Logo" width={160} height='auto' className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <div className="header-right">
                    {/* navigation menu */}
                    <div className="header__navigation d-none d-xl-block">
                      <nav className="navigation-menu primary--menu">
                        <ul>
                          <li>
                            <Link to="/"><span>Home</span></Link>
                          </li>
                          <li>
                            <Link to="/about"><span>About Us</span></Link>
                          </li>
                          <li className="has-children has-children--multilevel-submenu">
                            <Link to="/services"><span>Services</span></Link>
                            {/* multilevel submenu */}
                            <ul className="submenu">
                              <li>
                                <Link to="/devops-and-cloud-services"><span>DevOps &amp; Cloud Services</span></Link>
                              </li>
                              <li>
                                <Link to="/cloud-consulting-and-managed-services"><span>Cloud Consulting &amp; Managed
                                  Services</span></Link>
                              </li>
                              <li>
                                <Link to="/web-application-development"><span>Web Application Development</span></Link>
                              </li>
                              <li>
                                <Link to="/mobile-application-development"><span>Mobile Application
                                  Development</span></Link>
                              </li>
                              <li className="has-children">
                                <Link to="/agency-partnership"><span>Agency Partnership</span></Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/white-label-development-services"><span>White-Label Development
                                      Services</span></Link>
                                  </li>
                                  <li>
                                    <Link to="/dedicated-developers"><span>Dedicated Developers</span></Link>
                                  </li>
                                  <li>
                                    <Link to="/devops-and-cloud-partnership"><span>DevOps &amp; Cloud Partnership</span></Link>
                                  </li>
                                  <li>
                                    <Link to="/maintenance-and-support-services"><span>Maintenance &amp; Support
                                      Services</span></Link>
                                  </li>
                                  <li>
                                    <Link to="/custom-solutions-and-white-label-saas"><span>Custom Solutions &amp;
                                      White-Label SaaS</span></Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/careers"><span>Careers</span></Link>
                          </li>
                          <li>
                            <Link to="/contact-us"><span>Contact us</span></Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* mobile menu */}
                    <div className="mobile-navigation-icon d-block d-xl-none" onClick={openMobileMenu}>
                      <i className="burger-icon" />
                    </div>
                    {/* Render MobileOverlay and pass the state and setter as props */}
                    <MobileOverlay isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of header area  ====================*/}


    </>
  )
}

export default Header;