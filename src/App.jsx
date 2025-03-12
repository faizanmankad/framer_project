import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Compoment/Header/Header'
import Bennar from './Compoment/Benner/Bennar'
import Footer from './Compoment/Footer/Footer'
import Plugins from './Compoment/Plugins/Plugins'
import Websites from './Compoment/Websites/Websites'
import Master from './Compoment/Master/Master'
import Scrolbar from './Compoment/Scrolber/Scrolbar'
import Pricing from './Compoment/Pricing/Pricing'
import Faq from './Compoment/Faq/Faq'
import Template from './Compoment/Template/Template'
import Contact from './Compoment/Contact/Contact'
import Testimonials from './Compoment/Testimonials/Testimonials'



function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element : (
        <>
          <Header/>
          <Bennar/>
          <Scrolbar/>
          <Master/>
          <Websites/>
          <Pricing/>
          <Faq/>
          <Template/>
          <Testimonials/>
          <Plugins/>
          <Contact/>
          <Footer/>
        </>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
