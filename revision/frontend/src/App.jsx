import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState(null);



  const handleSubmit = async () => {
    const fromdata = new FormData();
    fromdata.append("title", title)
    fromdata.append("genre", genre)
    fromdata.append("image", file)
    try {
      await axios.post("http://localhost:4000/", fromdata);
      alert("file uploaded !");
    } catch (e) {
      alert("file not uploaded !");
    }
  }
  return (
    <>
      <div><input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='title' /></div>
      <div><input type="text" onChange={(e) => setGenre(e.target.value)} placeholder='genre' /></div>
      <div><input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder='poster' /></div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
