// import { Link } from 'react-router-dom'
// import { useState } from 'react';

// function Faq() {
//     const faqData = [
//         {
//             category: "General questions",
//             description: "Get answers to all the fundamental questions about Neweb.ai, its features, target users, integrations, and how it ensures data privacy.",
//             faq: [
//                 {
//                     question: "What is Neweb.ai?",
//                     answer: "Neweb.ai is an AI-powered platform designed to streamline workflows, enhance productivity, and integrate seamlessly with existing tools."
//                 },
//                 {
//                     question: "How does Neweb.ai handle data privacy?",
//                     answer: "We follow strict GDPR-compliant policies, ensuring that your data is encrypted and never shared with third parties."
//                 },
//             ]
//         },
//     ];

//     // State to track which FAQ is open
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleFaq = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className='container'>
//             <section className='faq-section'>
//                 <div className='faq-header'>
//                     <h5>Frequently Asked Questions</h5>
//                     <h2>Got questions? This way.</h2>
//                     <p>
//                         FAQs, quick fixes, and official info on every feature.
//                         Can't find your question here? Try our <Link to="/support">support forums</Link>.
//                     </p>
//                 </div>

//                 <div className='faq-card'>
//                     {faqData.map((section, index) => (
//                         <div key={index} className='faq-category'>
//                             <h3>{section.category}</h3>
//                             <p>{section.description}</p>
//                             <ul>
//                                 {section.faq.map((item, idx) => (
//                                     <li key={idx} className='faq-item'>
//                                         <button className='faq-question' onClick={() => toggleFaq(idx)}>
//                                             {item.question}
//                                             <span>{openIndex === idx ? "▲" : "▼"}</span>
//                                         </button>
//                                         {openIndex === idx && <p className='faq-answer'>{item.answer}</p>}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Faq;
