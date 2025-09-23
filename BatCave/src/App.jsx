import './App.css'
import FEAT from "./components/Main"
import NAV from './components/NAV'

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0b0215]">
        <NAV />
        <FEAT />
      </div>
    </>
  )
}

export default App
