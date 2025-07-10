import './App.css'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Home from './components/Home'
import User from './components/UserLIst'

function App() {
  // const [count, setCount] = useState(0)

  return ( 
    <div className='App'>
      <Navbar/>
      <User/>
      <Home/>
      <Blog />

    </div>
  )
}

export default App
