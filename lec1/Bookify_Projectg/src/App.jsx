import { Route, Routes } from 'react-router-dom'
// Pages
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/register' element={<Register />} />
    </Routes>
      
    </>
  )
}

export default App
