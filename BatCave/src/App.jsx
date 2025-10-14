import './App.css'
import CertificateShowcase from './components/CertificateShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
        
        <CertificateShowcase/>
           <Contact/>
           <Footer/>
      </div>
   
    </>
  )
}

export default App
