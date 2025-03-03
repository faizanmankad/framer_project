import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Pricing.css';
import { FaCheck } from "react-icons/fa6";

function Pricing() {

  const [isYearly, setIsYearly] = useState(false)

  const pricingPlans = [
    {
      name: "Starter",
      button: "Popular",
      monthlyPrice: 8,
      yearlyPrice: 89,
      features: ['Free Domain', '1 Website', 'Free SSL Certificate', 'Email Support', 'SEO Tools Suite']
    },
    {
      name: "Elite",
      monthlyPrice: 16,
      yearlyPrice: 168,
      features: ['Free Domain', '5 Website', 'Free SSL Certificate', '24*7 Live chat support', 'Priority SEO Optimization']
    },
    {
      name: "Agency",
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      features: ['Everything in Starter and Elite', 'Unlimited Websites', 'Agency-specific Tools', 'Priority 24/7 Support ']
    },

  ]

  return (
    <section className='container'>
      <div className='pricing'>
        <div className='pricing-header'>
          <h2>Pricing</h2>
          <p>Whether you&apos;re an individual, a small team, or a growing enterprise, we have a plan that aligns perfectly with your goals.</p>
        </div>

        <div className='toggle-container'>
        <div className="toggle-button"></div>
          <div className='pricing-toggle'>
            <div className='pricing-border'></div>
            <button
              className={isYearly ? 'inactive' : 'active'}
              onClick={() => setIsYearly(false)}
            >

              Monthly
            </button>
            <button
              className={isYearly ? 'active' : 'inactive'}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className='pricing-options'>
          {
            pricingPlans.map((plan, index) => (
              <div key={index} className='pricing-card'>
                <div className='pricing-name'>
                  <h6>{plan.name}</h6>
                  <p>{plan.button}</p>
                </div>
                <div className='pricing-amount'>
                  <span>$</span>
                  <h3>{isYearly ? plan.monthlyPrice : plan.yearlyPrice}</h3>
                  <span className='text-toggle'>{isYearly ? '/month' : '/year'}</span>
                </div>
                <div className='getstarter-button' >
                  <button >
                    <Link to="/">Get Started</Link>
                  </button>
                </div>
                <ul className='pricing-features'>
                  {
                    plan.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck />
                        {feature}
                      </li>
                    ))
                  }
                </ul>

              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default Pricing;
