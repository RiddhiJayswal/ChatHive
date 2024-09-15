
import { Routes , Route} from "react-router-dom"
import Login from "./Components/Login"
import Chat from "./Components/Chat"
import PageNotFound from "./Components/PageNotFound"
import Home from "./Components/Home"
function App() {

  return (
    <div>
      {/* <h1>ChatHive</h1> */}
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* for unique id use /: */}
          <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
          {/* it will match with everything */}
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
    
   
  )
}

export default App
