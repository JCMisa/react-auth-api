import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home'
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
