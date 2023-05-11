import Home from "./components/routes/Home";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SignIn from "./components/routes/Sign In/SignIn";


function App() {

  return(
      <Routes>
        <Route path='/' element={<NavigationBar/>}>
            <Route index element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
        </Route>
      </Routes>
  )
}

export default App