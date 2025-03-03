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
          <Plugins/>
          <Design/>
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
