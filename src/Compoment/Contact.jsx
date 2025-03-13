import '../Styles/Contact.css'
import { Link } from 'react-router-dom';
import { PencilRuler, MessageCircle, MonitorCheck, CircleUser, Siren, } from 'lucide-react';

function Contact() {
  return (
    <section className='container'>
      <div className='contact-section'>
        <div className='contact-header'>
          <h2>Contact</h2>
          <p>Get help from support, sales, or experts.</p>
        </div>
        <div className='contact-card'>
          <div className='premium-card'>
          <PencilRuler size={35} strokeWidth={2.5} />
            <h4>Premium support</h4>
            <p>Get help from a product expert.</p>
            <div className='primium-button'>
              <button>
                <Link>Start chat</Link>
              </button>
              <h6>For <Link>scaleup</Link> and <Link>enterprise</Link> plans</h6>
            </div>
          </div>
          <div className='talk-card'>
            <MessageCircle size={35} strokeWidth={2.5} />
            <h4>Talk to sales</h4>
            <p>Work with our team on enteprise solutions.</p>
            <button>
              <Link>Talk to sales</Link>
            </button>
          </div>
          <div className='product-card'>
            <MonitorCheck strokeWidth={2.5}/>
            <h4>Talk to sales</h4>
            <p>Submit a request to our support team.</p>
            <button>
              <Link>Learn more</Link>
            </button>
          </div>
          <div className='billing-card'>
            <CircleUser strokeWidth={2.5} />
            <h4>Billing support</h4>
            <p>Fix account or billing issues.</p>
            <button>
              <Link>Start chat</Link>
            </button>
          </div>
          <div className='emergency-card'>
            <Siren strokeWidth={2.5}/>
            <h4>Emergency support</h4>
            <p>Urgent help when your site’s down.</p>
            <button>
              <Link>Emergency</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact