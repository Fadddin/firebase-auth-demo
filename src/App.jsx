import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {


  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
      
      </>
    </Router>
  )
}

export default App
