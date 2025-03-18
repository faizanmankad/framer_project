import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import '../Styles/Header.css'
import headerLogo from '../assets/download.svg'
import { MdSlowMotionVideo } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdPublish } from "react-icons/md";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { CiDesktop } from "react-icons/ci";
import { MdBrowserUpdated } from "react-icons/md";
import { FaMeetup } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { SiXdadevelopers } from "react-icons/si";
import { SiRobloxstudio } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { Menu, X } from 'lucide-react';




function Header() {


    const [activeMenu, setActiveMenu] = useState(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [ismenu, setIsMenu] = useState(false);
    const burgerBtn = useRef()


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".menu-container") && !e.target.closest(".burger-menu")) {
                setActiveMenu(null)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const Updatesmenu = () => {
        if (!ismenu) {
            burgerBtn.current.style.display = 'block'
        }
        else {
            burgerBtn.current.style.display = 'none'
        }
        setIsMenu(!ismenu)
    }
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        Updatesmenu();
    };
    const headerMenu = [
        { name: "Start", submenu: "startMenu" },
        { name: "Features", submenu: "featuresMenu" },
        { name: "Resources", submenu: "resourcesMenu" },
        { name: "Help", submenu: "helpMenu" },
        { name: "Enterprise", submenu: "enterpriseMenu" },
        { name: "Pricing", url: "/Pricing" },
    ]
    const menuItems = {
        startMenu: [
            { name: "Academy", url: '/', p: 'Lorem ipsum dolor.', ican: <MdSlowMotionVideo /> },
            { name: "Marketplace", url: '/', p: 'Lorem ipsum dolor.', ican: <MdBusinessCenter /> },
            { name: "Experts", url: '/', p: 'Lorem ipsum dolor.', ican: <MdCheckCircle /> },
        ],
        featuresMenu: [
            { name: "Design", url: '/', p: 'Lorem ipsum dolor.', ican: <CiDesktop /> },
            { name: "Publish", url: '/', p: 'Lorem ipsum dolor.', ican: <MdPublish /> },
            { name: "Scale", url: '/', p: 'Lorem ipsum dolor.', ican: <LuChartNoAxesColumnIncreasing /> },
        ],
        resourcesMenu: [
            { name: "Updates", url: '/', p: 'Lorem ipsum dolor.', ican: <MdBrowserUpdated /> },
            { name: "Meetups", url: '/', p: 'Lorem ipsum dolor.', ican: <FaMeetup /> },
            { name: "Sites", url: '/', p: 'Lorem ipsum dolor.', ican: <FaSitemap /> },
        ],
        helpMenu: [
            { name: "Contact", url: '/Contact', p: 'Lorem ipsum dolor.', ican: <IoMdContact /> },
            { name: "Articles", url: '/', p: 'Lorem ipsum dolor.', ican: <MdArticle /> },
            { name: "Developers", url: '/', p: 'Lorem ipsum dolor.', ican: <SiXdadevelopers /> },
        ],
        enterpriseMenu: [
            { name: "Sales", url: '/', p: 'Lorem ipsum dolor.', ican: <IoMdContact /> },
            { name: "Studio", url: '/', p: 'Lorem ipsum dolor.', ican: <SiRobloxstudio /> },
            { name: "Solutions", url: '/', p: 'Lorem ipsum dolor.', ican: <LuChartNoAxesColumnIncreasing /> },
            { name: "Customers", url: '/', p: 'Lorem ipsum dolor.', ican: <FaHeart /> },
        ]
    }


    return (
        <div className='header-card'>
            <div className='container'>
                <div className='header'>
                    <Link to="/">
                        <div className='header-logo'>
                            <img src={headerLogo} alt="" />
                            <p>Framer</p>
                        </div>
                    </Link>
                    <div className='header-menu' ref={burgerBtn}>
                        <ul>
                            {headerMenu.map((item) => (
                                <li key={item.name} className="menu-container"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveMenu(activeMenu === item.submenu ? null : item.submenu);
                                    }}
                                    onMouseEnter={() => setTimeout(() => {
                                        setActiveMenu(item.submenu)
                                    })}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <Link to={item.url}>{item.name}</Link>

                                    {item.submenu && activeMenu === item.submenu && (
                                        <div className='start-menu '>
                                            <ul>
                                                {
                                                    menuItems[item.submenu].map((subItem) => (
                                                        <li key={subItem.name} >
                                                            <Link to={subItem.url}>
                                                            <div className='start-icon'>
                                                                <span>{subItem.ican}</span>
                                                            </div>
                                                            <div className='start-name'>
                                                                <h5>{subItem.name}</h5>
                                                                <p>{subItem.p}</p>
                                                            </div>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='header-button'>
                        <button className='login-button'>
                            <Link>Login</Link>
                        </button>
                        <button className='signup-button'>
                            <Link> Sign up</Link>
                        </button>
                        <button className="burger-menu" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X size={30}/> : <Menu size={30}/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header