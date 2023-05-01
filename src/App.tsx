import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'
import { Route, Routes, Outlet } from 'react-router-dom'

export const App =()=> {

  return (
    <>
    <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="experience" element={<Resume/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>   
      
      <Outlet/>
      
    </>
  )
}
export default App