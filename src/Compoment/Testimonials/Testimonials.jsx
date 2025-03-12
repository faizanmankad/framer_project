import '../Testimonials/Testimonials.css'
import iphone from '../../assets/testimonials-img1.png'

function Testimonials() {
  return (
    <section className='Testimonials'>
        <div className='container'>
            <div className='iphone-img'>
                <img src={iphone} alt="" />
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default Testimonials