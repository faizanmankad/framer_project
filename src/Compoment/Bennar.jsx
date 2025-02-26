import '../Styles/Bennar.css'
import { Link } from 'react-router-dom'
// import itemImg1 from '../assets/item-img1.png'
// import itemimg2 from '../assets/item-img2.png'
// import itemImg3 from '../assets/item-img3.png'
// import itemImg4 from '../assets/item-img04.png'
// import itemImg5 from '../assets/item-img5.png'
// import itemImg6 from '../assets/item-img6.avif'
// import itemImg7 from '../assets/item-img7.png'
// import itemImg8 from '../assets/item-img4.avif'
// import textImg1 from '../assets/download (1).svg'
// import textImg2 from '../assets/download (2).svg'
// import textImg3 from '../assets/download (3).svg'
// import textImg4 from '../assets/download (4).svg'
// import textImg5 from '../assets/download (5).svg'
// import textImg6 from '../assets/download (6).svg'
// import textImg7 from '../assets/download (7).svg'
// import textImg8 from '../assets/download (8).svg'

function Bennar() {

    return (
        <div className='bennar'>
            <div className='container'>
                <div className='bennar-text'>
                    <h1>Build stunning websites easily</h1>
                    <p>Craft stunning websites in seconds, complete with captivating content and images.</p>
                    <div className='bennar-button'>
                        <button className='start-button'>
                            <Link>
                                Start Now
                            </Link>
                        </button>
                        <button className='video-button'>
                            <Link>
                                View plans and pricing
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='bennar-card' >
                </div>
            </div>
            {/* 
            <div className='bennar-card' >
                <div className='container'>
                    <div className='bennar-Layout-button'>
                        <button>
                            <Link>
                                New:Layout Templates
                            </Link>
                        </button>
                    </div>
                    <div className='bennar-item'>
                        <div className='bennar-item-1'>
                            <div className='bennar-item-1-img1'>
                                <img src={itemImg1} alt="" />
                            </div>
                            <div className='bennar-item-1-img2'>
                                <img src={itemimg2} alt="" />
                            </div>
                        </div>
                        <div className='bennar-item-2'>
                            <div className='bennar-item-2-img1'>
                                <img src={itemImg3} alt="" />
                            </div>
                            <div className='bennar-item-2-img2'>
                                <img src={itemImg4} alt="" />
                            </div>
                            <div className='bennar-item-2-img3'>
                                <img src={itemImg5} alt="" />
                            </div>
                        </div>
                        <div className='bennar-item-3'>
                            <div className='bennar-item-3-img1' >
                                <img src={itemImg6} alt="" />
                            </div>
                            <div className='bennar-item-3-img2'>
                                <img src={itemImg7} alt="" />
                            </div>
                        </div>
                        <div className='bennar-item-4'>
                            <img src={itemImg8} alt="" />
                        </div>
                    </div>
                    <div className='bennar-card2'>
                        <div className='bennar-text-img'>
                            <div className='bennar-text-img-1'>
                                <img src={textImg1} alt="" />
                                <img src={textImg2} alt="" />
                                <img src={textImg3} alt="" />
                                <img src={textImg4} alt="" />
                                <img src={textImg5} alt="" />
                                <img src={textImg6} alt="" />
                                <img src={textImg7} alt="" />
                                <img src={textImg8} alt="" />
                            </div>
                            <div className='bennar-text-img-2'>
                                <Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default Bennar