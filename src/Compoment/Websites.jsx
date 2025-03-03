import '../Styles/Websites.css'
import { Link } from 'react-router-dom'
import webimg5 from '../assets/web-img-1.jpg'
import webimg2 from '../assets/web-img-2.jpg'
import webimg3 from '../assets/web-img-3.jpg'
import webimg4 from '../assets/web-img-4.jpg'
import webimg1 from '../assets/web-img-5.jpg'
import webimg6 from '../assets/web-img-6.jpg'

function Websites() {
  return (
    <div className='container'>
      <div className='websiter'>
        <div className='websiter-text'>
          <h2>
            Websites that stand out start in Framer
          </h2>
        </div>
        <div className='websiter-card'>
          <div className='websiter-img-card1'>
            <img src={webimg1} alt="" />
          </div>
          <div className='websiter-img-card4'>
            <img src={webimg2} alt="" />
          </div>
          <div className='websiter-img-card2'>
            <img src={webimg3} alt="" />
          </div>
          <div className='websiter-img-card3'>
            <img src={webimg4} alt="" />
          </div>
          <div className='websiter-img-card5'>
            <img src={webimg5} alt="" />
          </div>
          <div className='websiter-img-card6'>
            <img src={webimg6} alt="" />
          </div>
        </div>

        <div className='websiter-button'>
          <Link>
            <p>View hundreds of sites</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Websites