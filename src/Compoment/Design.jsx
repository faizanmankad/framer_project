import '../Styles/Design.css'
import { Link } from 'react-router-dom'
import designImg from '../assets/desing.avif'
import designImg2 from '../assets/design2.png'



function Design() {
    return (
        <div className='container'>
            <div className='design-cart'>
                <div className='design-img'>
                    <img src={designImg} alt="Design" />
                </div>
                <div className='design-img-2'>
                    <img src={designImg2} alt="" />
                </div>
                <div className='design-text'>
                    <h2>Step into the future of design</h2>
                    <p>Join thousands of designers and teams using Framer to turn ideas into high-performing websites, fast.</p>
                    <button>
                        <Link to="/signup">Get started for free</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Design