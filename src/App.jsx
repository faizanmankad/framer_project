import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './Compoment/Header'
import Bennar from './Compoment/Bennar'
import Footer from './Compoment/Footer'
import Design from './Compoment/Design'
import Plugins from './Compoment/Plugins'
import Websites from './Compoment/Websites'
import Master from './Compoment/Master'
import Scrolbar from './Compoment/Scrolbar'
import Pricing from './Compoment/Pricing'
import Template from './Compoment/Template'
import Faq from './Compoment/Faq'
import Contact from './Compoment/Contact'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Bennar />
          <Scrolbar />
          <Master />
          <Websites />
          <Plugins />
          <Template/>
          <Design />
          <Footer />
        </>
      )
    },
    {
      path: '/Pricing',
      element: (
        <>
          <Header />
          <Pricing />
          <Faq/>
          <Footer />
        </>
      )
    },
    {
      path: '/Contact',
      element: (
        <>
          <Header />
          <Contact/>
          <Footer />
        </>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
