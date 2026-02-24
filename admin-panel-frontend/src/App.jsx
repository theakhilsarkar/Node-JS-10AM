
// import './App.css'

import SignIn from "./pages/SignIn"
import { Routes, Route } from 'react-router'
import SignUp from "./pages/SignUp"
import VerifyOtp from "./pages/VerifyOtp"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import AddEmploye from "./pages/AddEmploye"
import EditEmployee from "./pages/EditEmployee"
import AddSelection from "./pages/AddSelection"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-emp" element={<AddEmploye />} />
        <Route path="/edit-emp" element={<EditEmployee />} />
        <Route path="/add-selection" element={<AddSelection />} />
      </Routes>
    </>
  )
}

export default App;

// dropdown data - database

// Sales - sales exe. telecaller, Relationship Manager
// IT - Devloper, Designer, QA, Tester, DevOps
// HR - Recuruter, Interviewer, Employe Manager

// department - 
// role - 

// department
// role


