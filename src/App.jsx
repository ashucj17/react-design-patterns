import UserContainer from './Containers/UserContainer'
import './App.css'
import useWindowSize from './Hooks/useWindowSize'


function App() {

  const {size} = useWindowSize()

  return (
    <>
     <h1> React Design Patterns</h1>
     <UserContainer />
     <div>
     <span style={{color: "red"}}>Window Size: {size.width} X {size.height} </span>
     </div>
    </>
  )
}

export default App
