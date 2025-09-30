import './App.css'
import FEAT from "./components/Main"
import NAV from './components/NAV'
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

      </div>
    </>
  )
}

export default App
