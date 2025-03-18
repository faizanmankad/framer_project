import '../Styles/Master.css'
import { Link } from 'react-router-dom'
import masterLogo from '../assets/download.svg'

function Master() {
    return (

        <div className='master'>
            <div className='container'>
                <div className='master-card'>
                    <div className='master-text'>
                        <h2>
                            Simple to learn, easy to master
                        </h2>
                    </div>
                </div>
            </div>
            <div className='master-video'>
                <video autoPlay loop muted src="https://framerusercontent.com/assets/qbUrBrBarjUBmUkk2DQzW1fSgA.mp4"></video>
                <div className='master-video-text'>
                    <div className='master-logo'>
                        <img src={masterLogo} alt="" />
                        <p>Framer Academy</p>
                    </div>
                    <h2>
                        Master the Fundamentals
                    </h2>
                    <div className='master-button'>
                        <button className='Fundamentals-button'>
                            <Link>
                           <span> Start</span> Fundamentals
                            </Link>
                        </button>
                        <button className='watch-button'>
                            <Link>
                               <span> Watch</span> Introduction
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master