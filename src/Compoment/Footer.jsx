import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/download.svg';

function Footer() {
    const footerMenus = [
        {
            title: "Resources",
            links: ["Desktop app", "Figma plugin", "HTML plugin", "Developers", "Startup kit"],
        },
        {
            title: "Company",
            links: ["Careers", "Report", "Status", "Legal", "Blog"],
        },
        {
            title: "Creators",
            links: ["Wallpapers", "Partners", "Payouts", "Events", "Brand"],
        },
        {
            title: "Compare",
            links: ["Wordpress", "Contentful", "Unbounce", "Webflow", "Figma"],
        },
        {
            title: "Social",
            links: ["X Twitter", "Instagram", "Youtube", "Linkedin", "Threads"],
        }
    ];

    return (
        <div className="container">
            <footer className="footer">
                <div className="footer-card">
                    {footerMenus.map((menu, index) => (
                        <div key={index} className="footer-menu">
                            <h4>{menu.title}</h4>
                            <ul>
                                {menu.links.map((name) => (
                                    <li key={name}>
                                        <Link to="/">{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer-logo">
                        <img src={footerLogo} alt="Company Logo" />
                    </div>
                </div>
                <div className="footer-logo2">
                    <img src={footerLogo} alt="Company Logo" />
                </div>
            </footer>
        </div>
    );
}

export default Footer;
