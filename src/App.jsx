import Homepage from '../src/Pages/Homepage.jsx'
import Aboutus from '../src/Pages/Aboutus.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Router from '../src/Config/Router.jsx'

const App = () => {
  return (
    <div className='relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black overflow-hidden'>  
      {/* <Homepage/> */}
      {/* <Aboutus/> */}
      {/* <Contact/> */}
      {/* <Services/> */}
      <Router/>
    </div>
  )
}

export default App