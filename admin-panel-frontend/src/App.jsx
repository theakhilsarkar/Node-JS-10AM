
// import './App.css'

import SignIn from "./pages/SignIn"
import { Routes, Route } from 'react-router'
import SignUp from "./pages/SignUp"
import VerifyOtp from "./pages/VerifyOtp"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </>
  )
}

export default App
