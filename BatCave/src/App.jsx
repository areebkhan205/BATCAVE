import './App.css'
import Contact from './components/Contact'
import FEAT from "./components/Main"
import NAV from './components/NAV'
import TechSection from './components/TechSection'
import Work from './components/Work'
import WorkExp from './components/WorkExp'
function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0b0215]">
       <NAV/>
       <FEAT/>
        <WorkExp/>
        <div className='relative top-[300px]'>
     <Work/>
        </div>
        <div className='relative top-[300px]'>
   <TechSection/>
        </div>
      </div>
      <Contact/>
    </>
  )
}

export default App
