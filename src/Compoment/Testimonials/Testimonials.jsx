import '../Testimonials/Testimonials.css'
import iphone from '../../assets/testimonials-img1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from "lucide-react";

function Testimonials() {

  const sliderSettings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderSettings2 = {
    centerPadding: '0',
    className: 'center',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    centerMode: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1.8 } },
      { breakpoint: 768, settings: { slidesToShow: 1.8 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // const testimonials2 = {
  //   slidesToShow: 1.8,
  //   slidesToScroll: 1,
  //   rtl: true,
  // }; 


  const testimonialsCard = [
    {
      name: "John Doe",
      text: "This product is amazing! It has changed my life completely.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Software Engineer"
    },
    {
      name: "Jane Smith",
      text: "Excellent service and fantastic support. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      role: "Product Manager"
    },
    {
      name: "Michael Johnson",
      text: "A game-changer in the industry. I love using this every day!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "Entrepreneur"
    },
    {
      name: "Michael Johnson",
      text: "A game-changer in the industry. I love using this every day!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "Entrepreneur"
    },
    {
      name: "Michael Johnson",
      text: "A game-changer in the industry. I love using this every day!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "Entrepreneur"
    }
  ];


  return (
    <section className='testimonials '>
      <div className='container'>
        <div className='iphone-img'>
          <img src={iphone} alt="" />
        </div>
        <div className='testimonials-heading-card'>
          <div className='testimonials-heading-item'>
            <span><Quote size={16} strokeWidth={1.25} />Testimonials</span>
            <h2>Whet Our Users are Saying </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='slider-container'>
          <div className='testimonials-card '>
            <Slider {...sliderSettings1}>
              {testimonialsCard.map((testimonialsItem, id) => (
                <div key={id} className='testimonials-card-1 '>
                  <div className='testimonials-item-1 '>
                    <div className='testimonials-item-card'>
                      <div className='testimonials-item-img'>
                        <img src={testimonialsItem.image} alt={testimonialsItem.name} />
                      </div>
                      <div className='testimonials-item-header'>
                        <h3>{testimonialsItem.name}</h3>
                        <p>{testimonialsItem.role}</p>
                      </div>
                    </div>
                    <p>{testimonialsItem.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <Slider {...sliderSettings2}>
              {testimonialsCard.map((testimonialsItem, id) => (
                <div key={id} className='testimonials-card-1'>
                  <div className='testimonials-item-2'>
                    <div className='testimonials-item-card'>
                      <div className='testimonials-item-img'>
                        <img src={testimonialsItem.image} alt={testimonialsItem.name} />
                      </div>
                      <div className='testimonials-item-header'>
                        <h3>{testimonialsItem.name}</h3>
                        <p>{testimonialsItem.role}</p>
                      </div>
                    </div>
                    <p>{testimonialsItem.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials