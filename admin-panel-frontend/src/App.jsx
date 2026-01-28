
// import './App.css'

import SignIn from "./pages/SignIn"
import { Routes, Route } from 'react-router'
import SignUp from "./pages/SignUp"
import VerifyOtp from "./pages/VerifyOtp"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
