
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/about" element = {<About />} />
    <Route path="/dashboard" element = {<DashBoard />} />
    <Route path="/Projects" element = {<Projects />} />
    <Route path="/SignIn" element = {<SignIn />} />
    <Route path="/SignUp" element = {<SignUp />} />
   </Routes>
   <Footer />
   </BrowserRouter>
   
  )
}
