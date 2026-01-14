import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Home from './pages/Home'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // cleanup in case component unmounts
  }, []);


  return (
    

      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <ScrollIndicator/>
           <Home/>
          </div>
        )}
      </div>
    
  )
}

export default App
