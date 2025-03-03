import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/Neweb-footer-logo.webp';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


function Footer() {
    const footerMenus = [
        {
            title: "Resources",
            links: [
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blog" }
            ],
        },
        {
            title: "Get in touch",
            links: [{ name: "support@neweb.ai", path: "mailto:support@neweb.ai" }],
            icons: [
                { icon: <FaInstagram />, link: "https://www.instagram.com/newebai/" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/newebai/" },
                { icon: <FaXTwitter />, link: "https://x.com/i/flow/login?redirect_after_login=%2FNeweb__Ai" },
            ],
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className='footer-section'>
                    <div className="footer-card">

                        {footerMenus.map((menu, index) => (
                            <div key={index} className="footer-menu">
                                <h4>{menu.title}</h4>
                                <ul>
                                    {menu.links.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {menu.icons && (
                                    <div className="footer-icons">
                                        {menu.icons.map((item, i) => (
                                            <button key={i}>
                                                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                    {item.icon}
                                                </Link>
                                            </button>

                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="footer-logo">
                            <Link to='/'>
                                <img src={footerLogo} alt="Company Logo" />
                            </Link>
                            <p>Neweb.ai is your ultimate website builder, designed to help you create stunning, professional websites effortlessly. </p>
                        </div>
                    </div>
                    <div className="footer-logo2">
                        <img src={footerLogo} alt="Company Logo" />
                        <p>Neweb.ai is your ultimate website builder, designed to help you create stunning, professional websites effortlessly. </p>
                    </div>
                </div>
                <hr />
                <div className='footer-section2'>
                    <p>© 2024 Neweb.ai. All rights reserved. Build smarter, faster, and better with Neweb.ai.</p>
                    <div className='footer-section2-button'>
                        <button>
                            <Link>
                                Terms & Conditions
                            </Link>
                        </button>
                        <button>
                            <Link>
                                Privacy Policy
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
