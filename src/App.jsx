import UserContainer from './Containers/UserContainer'
import './App.css'
import useWindowSize from './Hooks/useWindowSize'


function App() {

  const {width, height} = useWindowSize()

  return (
    <>
     <h1> React Design Patterns</h1>
     <UserContainer />
     <div>
      Window Size: {width} X {height}
     </div>
    </>
  )
}

export default App
