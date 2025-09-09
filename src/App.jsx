import UserContainer from './Containers/UserContainer'
import './App.css'
import useWindowSize from './Hooks/useWindowSize'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import UserProfile from './Components/UserProfile/UserProfile'
import userAuth from './hoc/userAuth'


function App() {

  const {size} = useWindowSize()

              const CheckDashboard  =  userAuth(Dashboard);
              const CheckUserProfile  =  userAuth(UserProfile);

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<CheckDashboard employee="Ashish"/>}/>
        <Route path='/userprofile' element={<CheckUserProfile/>} />
        <Route path='/userContainer' element={<UserContainer/>} />
        <Route path='/' element={<UserContainer/>} />
      </Routes>
    <hr/>
     <h1> Container Presentational Design Patterns</h1>
     <div>
     <span style={{color: "red"}}>Window Size: {size.width} X {size.height} </span>
     </div>
    </>
  )
}

export default App
