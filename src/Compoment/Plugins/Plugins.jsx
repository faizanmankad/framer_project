import '../Plugins/Plugins.css'
import { Link } from 'react-router-dom'
import pluginsImg1 from '../../assets/plugins-img1.png'
import pluginsImg2 from '../../assets/plugins-img2.png'
import pluginsImg3 from '../../assets/plugins-img3.png'
import pluginsImg4 from '../../assets/plugins-img4.png'
import pluginsImg5 from '../../assets/plugins-img5.avif'
import pluginsIcon1 from '../../assets/plugins-icon1.png'
import pluginsIcon2 from '../../assets/plugins-icon2.png'
import pluginsIcon3 from '../../assets/plugins-icon3.png'
import pluginsIcon4 from '../../assets/plugins-icon4.png'
import pluginsIcon5 from '../../assets/plugins-icon5.png'
import pluginsIcon6 from '../../assets/plugins-icon6.png'
import pluginsIcon7 from '../../assets/plugins-icon7.png'
import pluginsIcon8 from '../../assets/plugins-icon8.png'
import pluginsIcon9 from '../../assets/plugins-icon9.png'
import pluginsIcon10 from '../../assets/plugins-icon10.png'
import pluginsIcon11 from '../../assets/plugins-icon11.png'
import pluginsIcon12 from '../../assets/plugins-icon12.png'
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { IoDesktop } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaSalesforce } from "react-icons/fa";


function Plugins() {

    const pluginsMenu = [
        { name: "Sheets", url: '/', p: 'Sync with Google.', icon: pluginsIcon1 },
        { name: "Humblytics", url: '/', p: 'Track your site.', icon: pluginsIcon2 },
        { name: "Lummi", url: '/', p: 'Sync with Google.', icon: pluginsIcon3 },
        { name: "Renamer", url: '/', p: 'Sync with Google.', icon: pluginsIcon4 },
        { name: "Semflow", url: '/', p: 'Sync with Google.', icon: pluginsIcon5 },
        { name: "Dither", url: '/', p: 'Sync with Google.', icon: pluginsIcon6 },
        { name: "Notion", url: '/', p: 'Sync with Google.', icon: pluginsIcon7 },
        { name: "Phosphor", url: '/', p: 'Sync with Google.', icon: pluginsIcon8 },
        { name: "Airtable", url: '/', p: 'Sync with Google.', icon: pluginsIcon9 },
        { name: "ASCII", url: '/', p: 'Sync with Google.', icon: pluginsIcon10 },
        { name: "Framer Commerce", url: '/', p: 'Sync with Google.', icon: pluginsIcon11 },
        { name: "Search Console", url: '/', p: 'Sync with Google.', icon: pluginsIcon12 },
    ]

    return (
        <section className='plugins-section'>
        <div className='container'>
            <div className='plugins'>
                <div className='plugins-text'>
                    <h2>
                        Start with a Template, level-up with Plugins
                    </h2>
                </div>
                <div className='plugins-card'>
                    <div className='plugins-img'>
                        <div className='plugins-card1'>
                            <Link>
                                <div className='plugins-img1'>
                                    <div className='plugins-img-card1'>
                                        <img src={pluginsImg1} alt="" />
                                        <div className='plugins-img1-text'>
                                            <span><GoRocket /></span>
                                            <h5>
                                                Startup
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='plugins-card2'>
                            <Link>
                                <div className='plugins-img2'>
                                    <div className='plugins-img-card2'>
                                        <img src={pluginsImg2} alt="" />
                                        <div className='plugins-img2-text'>
                                            <span><IoDesktop /></span>
                                            <h5>
                                                Agency
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className='plugins-img3'>
                                    <div className='plugins-img-card3'>
                                        <img src={pluginsImg3} alt="" />
                                        <div className='plugins-img2-text'>
                                            <span><LuChartNoAxesColumnIncreasing /></span>
                                            <h5>
                                                Business
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className='plugins-img4'>
                                    <div className='plugins-img-card4'>
                                        <img src={pluginsImg4} alt="" />
                                        <div className='plugins-img2-text'>
                                            <span><MdOutlineBusinessCenter /></span>
                                            <h5>
                                                Portfolio
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className='plugins-img5'>
                                    <div className='plugins-img-card5'>
                                        <img src={pluginsImg5} alt="" />
                                        <div className='plugins-img2-text'>
                                            <span><FaSalesforce /></span>
                                            <h5>
                                                SaaS
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='plugins-menu'>
                        <ul>
                            {
                                pluginsMenu.map((item, index) => (
                                    <li key={index}>
                                        <Link>
                                            <div className='plugins-icon'>
                                                <img src={item.icon} alt={item.name} />
                                            </div>
                                            <div className='plugins-name'>
                                                <h5>{item.name}</h5>
                                                <p>{item.p}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='plugins-button'>
                        <Link>
                            <p>Browse the Marketplace</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Plugins