import '../Styles/Websites.css'
import { Link } from 'react-router-dom'

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
            <video autoPlay loop muted src="https://framerusercontent.com/assets/7pjjHThDJ0d7FSLOtDrTA4pRXEc.mp4"></video>
          </div>
          <div className='websiter-img-card4'>
            <video autoPlay loop muted src="https://framerusercontent.com/assets/uqb7Jrt9Ipm0RSjVjEVD8boQ5s.mp4"></video>
          </div>
          <div className='websiter-img-card2'>
            <video autoPlay loop muted src="https://framerusercontent.com/assets/qg3ySEAIvRVlkcoI94zHjE57Rk.mp4"></video>
          </div>
          <div className='websiter-img-card3'>
            <video autoPlay loop muted src="https://framerusercontent.com/assets/Cw4grH0hI3nRYQLiC53MUuRL0.mp4"></video>
          </div>
          <div className='websiter-img-card5'>
            <video autoPlay loop muted src="https://framerusercontent.com/assets/LzP7kaWtEH5iEWLmFk0w7mQ9oJw.mp4"></video>
          </div>
          <div className='websiter-img-card6'>
            <video autoPlay loop muted src="https://framerusercontent.com/assets/6lIeCq70Ms7a34UU3ZOrrZrBSQg.mp4"></video>
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