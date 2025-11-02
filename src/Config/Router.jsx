import { Route, Routes , BrowserRouter} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Aboutus from '../Pages/Aboutus'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import GetStarted from '../Pages/GetStarted'


const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/getstarted' element={<GetStarted/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
