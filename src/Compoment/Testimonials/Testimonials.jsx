import '../Testimonials/Testimonials.css'
import iphone from '../../assets/testimonials-img1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from "lucide-react";

function Testimonials() {

  const testimonials1 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };
  const testimonials2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1.8,
    slidesToScroll: 0.9,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1.8 } },
      { breakpoint: 768, settings: { slidesToShow: 1.8 } },
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const testimonialsCard1 = [
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

  const testimonialsCard2 = [
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
    <section className='testimonials'>
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
        <div className='testimonials-card'>
          <Slider {...testimonials1}>
            {testimonialsCard1.map((testimonialsItem1, id) => (
              <div key={id} className='testimonials-card-1'>
                <div className='testimonials-item-1'>
                  <div className='testimonials-item-card'>
                    <div className='testimonials-item-img'>
                      <img src={testimonialsItem1.image} alt={testimonialsItem1.name} />
                    </div>
                    <div className='testimonials-item-header'>
                      <h3>{testimonialsItem1.name}</h3>
                      <p>{testimonialsItem1.role}</p>
                    </div>
                  </div>
                  <p>{testimonialsItem1.text}</p>
                </div>
              </div>
            ))}
          </Slider>
          <Slider {...testimonials2}>
            {testimonialsCard2.map((testimonialsItem2, id) => (
              <div key={id} className='testimonials-card-1'>
                <div className='testimonials-item-2'>
                  <div className='testimonials-item-card'>
                    <div className='testimonials-item-img'>
                      <img src={testimonialsItem2.image} alt={testimonialsItem2.name} />
                    </div>
                    <div className='testimonials-item-header'>
                      <h3>{testimonialsItem2.name}</h3>
                      <p>{testimonialsItem2.role}</p>
                    </div>
                  </div>
                  <p>{testimonialsItem2.text}</p>
                </div>
              </div>
            ))}
          </Slider>

        </div>

      </div>
    </section>
  )
}

export default Testimonials