import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignInn from './pages/SignInn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About/>} />
    <Route path='/sign-in' element={<SignInn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/profile' element={<Profile/>} />
  </Routes>
  </BrowserRouter>
}
