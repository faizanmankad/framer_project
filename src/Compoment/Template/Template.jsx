import '../Template/Template.css';
import template1 from '../../assets/colson-bike.jpg'
import template2 from '../../assets/aroma bakery cake.jpg'
import template3 from '../../assets/astonia business cosulting.jpg'
import template4 from '../../assets/avvaire startup busniess.jpg'
import template5 from '../../assets/cakery shop bakery.png'
import template6 from '../../assets/amity animal hospital.jpg'
import template7 from '../../assets/fashion feel woocommerce.jpg'
import template8 from '../../assets/finnace investment.jpg'
import template9 from '../../assets/fit point gym.jpg'
import template10 from '../../assets/menu.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Template() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
        lazyLoad: "ondemand",
        nextArrow: false,
        prevArrow: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3.3 } },
            { breakpoint: 768, settings: { slidesToShow: 2.7 } },
            { breakpoint: 425, settings: { slidesToShow: 1.7, slidesToScroll: 1 } },
            { breakpoint: 375, settings: { slidesToShow: 1.3, slidesToScroll: 1 } },
            { breakpoint: 320, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };
    

    const templateImg = [
        { img: template1, title: 'Colson Bike', description: 'High-quality bicycle store' },
        { img: template2, title: 'Aroma Bakery', description: 'Fresh cakes and pastries' },
        { img: template3, title: 'Astonia Consulting', description: 'Business consulting services' },
        { img: template4, title: 'Avvaire Startup', description: 'Innovative startup solutions' },
        { img: template5, title: 'Cakery Shop', description: 'Delicious bakery items' },
        { img: template6, title: 'Amity Animal Hospital', description: 'Veterinary care center' },
        { img: template7, title: 'Fashion Feel', description: 'WooCommerce fashion store' },
        { img: template8, title: 'Finance Investment', description: 'Smart financial solutions' },
        { img: template9, title: 'Fit Point Gym', description: 'Fitness and training center' },
        { img: template10, title: 'Gourmet Menu', description: 'Exclusive dining experience' },
    ];

    return (
        <section className="template-section">
            <div className="container">
                <div className="template-card">
                    <div className="template-header">
                        <h2>Find a Pro</h2>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {templateImg.map((template, index) => (
                                <div key={index} className="template-item">
                                    <div className='slider-card'>
                                        <img src={template.img} alt={template.title} />
                                        <h3>{template.title}</h3>
                                        <p>{template.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Template;
