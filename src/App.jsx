import { Suspense, lazy } from "react"
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"

const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))
function App() {


  return (
    <>
     <div>
      <h1 className=' bg-purple-500 text-2xl p-4 m-2 text-center rounded-lg'>Header</h1>
     </div>
     <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path = '/' element = {<Suspense fallback = {'Loading....'}><Landing/></Suspense>}/>
          <Route path = '/dashboard' element = {<Suspense fallback = {'Loading....'}><Dashboard/></Suspense>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

function Appbar(){
  const navigate = useNavigate()
  return <div className="flex justify-center">
          <button className="border-2 bg-blue-300 mt-10 mr-3" onClick={()=>{
            navigate('/')
          }}>Landing</button>
          <button className="border-2 bg-blue-300 mt-10 ml-3" onClick={()=>{
            navigate('/dashboard')
          }}>Dashboard</button>
      </div>
}

export default App
