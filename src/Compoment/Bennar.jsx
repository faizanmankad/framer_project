import '../Styles/Bennar.css'
import { Link } from 'react-router-dom'

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
        </div>
    )
}

export default Bennar