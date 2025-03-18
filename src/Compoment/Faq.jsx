import '../Styles/Faq.css';
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from "lucide-react";
import { useState } from 'react';
import { CircleChevronDown, CircleChevronUp } from 'lucide-react';

function Faq() {

    const [openIndex, setOpenIndex] = useState(null)

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const faqData = [
        {
            category: "General questions:",
            description: "Get answers to all the fundamental questions about Neweb.ai, its features, target users, integrations, and how it ensures data privacy.",
            faq: [
                {
                    question: "What is Neweb.ai?",
                    answer: "Neweb.ai is a cutting-edge platform designed to simplify and accelerate web development using AI-driven tools. It empowers developers and teams to create, optimize, and maintain websites with minimal manual effort.",
                },
                {
                    question: "Do i need coding experience to use neweb.ai?",
                    answer: "No, absolutely not! Our AI-powered platform is designed for users of all skill levels. You don't need any technical knowledge to create a professional website.",
                },
                {
                    question: "Who can use Neweb.ai?",
                    answer: "Neweb.ai is suitable for web developers, designers, project managers, and businesses looking for efficient and intelligent web development solutions. Whether you're a beginner or a professional, our tools cater to all skill levels.",
                },
                {
                    question: "What are the main features of Neweb.ai?",
                    answer: "Neweb.ai offers features such as free domain, powerful hosting, drag and drop editor, real-time debugging, website optimization, responsive design tools, and seamless integration with popular frameworks and APIs.",
                },
                {
                    question: "How does Neweb.ai ensure data privacy?",
                    answer: "We prioritize data security and privacy by adhering to industry-standard practices, encrypting sensitive information, and providing options for self-hosted solutions.",
                },
                {
                    question: "What happens if I encounter issues during installation or setup?",
                    answer: "We have a 24x7 Support team to help you out 🙂",
                },
            ]
        },
        {
            category: "License usage:",
            description: "Learn about our flexible licensing options, usage guidelines, and what happens when your subscription changes or expires.",
            faq: [
                {
                    question: "What licensing options are available for Neweb.ai?",
                    answer: "We offer three main license types:",
                },
                {
                    question: "Can I upgrade or downgrade my license?",
                    answer: "Yes, you can upgrade or downgrade your license at any time through your Neweb.ai account dashboard. Adjustments will be prorated based on your billing cycle.",
                },
                {
                    question: "Is the license a one-time purchase or subscription-based?",
                    answer: "Neweb.ai licenses are subscription-based, with options for monthly or annual billing. Annual subscriptions come with a discount compared to monthly payments.",
                },
                {
                    question: "What happens if my subscription expires?",
                    answer: "If your subscription expires, you will lose access to premium features and updates. However, your existing projects will remain accessible till 30 days.",
                },

            ]
        },
        {
            category: "Support & updates:",
            description: "Discover how Neweb.ai provides support, updates, and training resources to keep your experience smooth and up-to-date.",
            faq: [
                {
                    question: "What kind of support does Neweb.ai provide?",
                    answer: "Neweb.ai offers multiple support options, including:",
                    faqmenu: [
                        { name: "Email Support", p: ': Available for all users.', ican: <IoMdCheckmark /> },
                        { name: "Live Chat", p: ': For Pro and Enterprise users.', ican: <IoMdCheckmark /> },
                        { name: "Priority Support", p: ': Exclusive to Enterprise users.', ican: <IoMdCheckmark /> },
                    ]
                },
                {
                    question: "How often does Neweb.ai release updates?",
                    answer: "Updates are released regularly to introduce new features, improve performance, and fix bugs. Major updates are typically rolled out quarterly.",
                },
                {
                    question: "How can I report a bug or request a feature? ",
                    answer: "You can report bugs or request new features via our support portal or directly through the Tickets option in your Neweb.ai account.",
                },
            ]
        },
    ]
    return (
        <div className='container'>
            <section className='faq-section'>
                <div className='faq-header'>
                    <h5>Frequently asked questions</h5>
                    <h2>Got questions? This way.</h2>
                    <p>FAQs, quick fixes, and official info on every feature.
                        Can&apos;t find your question here, try our <Link>support forums</Link>.</p>
                </div>
                <div className='faq-card'>
                    {faqData.map((section, index) => (
                        <div key={index} className='faq-category'>
                            <div className='faq-card-header'>
                                <h2>{section.category}</h2>
                                <p>{section.description}</p>
                            </div>
                            {section.faq.map((item, idx) => (
                                <div key={idx} className='faq-item'>
                                    <h3 onClick={() => toggleFaq(idx)}>
                                        {item.question}
                                        <span>{openIndex === idx ?  <CircleChevronUp /> : <CircleChevronDown /> }</span>
                                    </h3>
                                    {openIndex === idx &&
                                        <>
                                            <p>{item.answer}</p>
                                            <div className='faq-menu'>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Basic Tier:</span> Basic features for individuals and small projects. Consist of one website.
                                                    </h6>
                                                </div>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Pro License:</span> Advanced features, suitable for professionals and businesses.
                                                    </h6>
                                                </div>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Enterprise License:</span> Custom solutions tailored for large organizations, including premium support and dedicated features.
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className='faq-menu2'>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Basic Tier:</span> Basic features for individuals and small projects. Consist of one website.
                                                    </h6>
                                                </div>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Pro License:</span> Advanced features, suitable for professionals and businesses.
                                                    </h6>
                                                </div>
                                                <div className='faq-menu-card'>
                                                    <IoMdCheckmark />
                                                    <h6>
                                                        <span>Enterprise License:</span> Custom solutions tailored for large organizations, including premium support and dedicated features.
                                                    </h6>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Faq