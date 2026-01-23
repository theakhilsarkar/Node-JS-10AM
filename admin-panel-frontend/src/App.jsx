
// import './App.css'

import SignIn from "./pages/SignIn"
import { Routes, Route } from 'react-router'
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <SignIn />
    </>
  )
}

export default App
