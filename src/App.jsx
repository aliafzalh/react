import './App.css'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Home from './components/Home'
import User from './components/UserLIst'
import Weather from './components/weather'
// import Weather from './components/weather'
// import Weather from './components/Weather';



function App() {
  // const [count, setCount] = useState(0)

  return ( 
    <div className='App'>
      <Navbar/>
      <User/>
      <Home/>
      <Blog />
      <Weather/>
    </div>
  )
}

export default App
