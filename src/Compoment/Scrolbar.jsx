import '../Styles/Scrolbar.css'
import { Link } from 'react-router-dom'
import scrolbarImg1 from '../assets/item-img1.png'
import scrolbarImg2 from '../assets/item-img2.png'
import scrolbarImg3 from '../assets/scrolbar-img3.png'
import scrolbarImg4 from '../assets/scrolbar-img4.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1  
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

function Scrolbar() {
    return (
        <div className='container'>
            <Carousel responsive={responsive}>
            <div className='scrolbar'>
                <div className='scrolbar-text'>
                    <h2>
                        Where designing and building become one
                    </h2>
                </div>
                <div className='scrolbar-card'>
                    <div className='scrolbar-card1'>
                        <div className='scrolbar-card1-text'>
                            <div className='scrolbar-card1-heding'>
                                <p>Design</p>
                                <h3>A true design canvas, not just a visual HTML editor.</h3>
                            </div>
                            <div className='scrolbar-card1-button'>
                                <button>
                                    <Link>
                                        Learn more
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className='scrolbar-img-card'>
                            <div className='scrolbar-img-card1'>
                                <div className='scrolbar-item-img1'>
                                    <img src={scrolbarImg1} alt="" />
                                    <img src={scrolbarImg2} alt="" />
                                </div>
                                <div className='scrolbar-item-img2'>
                                    <img src={scrolbarImg3} alt="" />
                                    <video autoPlay muted loop src="https://framerusercontent.com/assets/QqaG0gm3jF8RsKLEA7ZoF6via3w.mp4"></video>
                                    <img src={scrolbarImg4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scrolbar'>
                <div className='scrolbar-text'>
                    <h2>
                        Where designing and building become one
                    </h2>
                </div>
                <div className='scrolbar-card'>
                    <div className='scrolbar-card1'>
                        <div className='scrolbar-card1-text'>
                            <div className='scrolbar-card1-heding'>
                                <p>Design</p>
                                <h3>A true design canvas, not just a visual HTML editor.</h3>
                            </div>
                            <div className='scrolbar-card1-button'>
                                <button>
                                    <Link>
                                        Learn more
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className='scrolbar-img-card'>
                            <div className='scrolbar-img-card1'>
                                <div className='scrolbar-item-img1'>
                                    <img src={scrolbarImg1} alt="" />
                                    <img src={scrolbarImg2} alt="" />
                                </div>
                                <div className='scrolbar-item-img2'>
                                    <img src={scrolbarImg3} alt="" />
                                    <video autoPlay muted loop src="https://framerusercontent.com/assets/QqaG0gm3jF8RsKLEA7ZoF6via3w.mp4"></video>
                                    <img src={scrolbarImg4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scrolbar'>
                <div className='scrolbar-text'>
                    <h2>
                        Where designing and building become one
                    </h2>
                </div>
                <div className='scrolbar-card'>
                    <div className='scrolbar-card1'>
                        <div className='scrolbar-card1-text'>
                            <div className='scrolbar-card1-heding'>
                                <p>Design</p>
                                <h3>A true design canvas, not just a visual HTML editor.</h3>
                            </div>
                            <div className='scrolbar-card1-button'>
                                <button>
                                    <Link>
                                        Learn more
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className='scrolbar-img-card'>
                            <div className='scrolbar-img-card1'>
                                <div className='scrolbar-item-img1'>
                                    <img src={scrolbarImg1} alt="" />
                                    <img src={scrolbarImg2} alt="" />
                                </div>
                                <div className='scrolbar-item-img2'>
                                    <img src={scrolbarImg3} alt="" />
                                    <video autoPlay muted loop src="https://framerusercontent.com/assets/QqaG0gm3jF8RsKLEA7ZoF6via3w.mp4"></video>
                                    <img src={scrolbarImg4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Carousel>
        </div>
    )
}

export default Scrolbar