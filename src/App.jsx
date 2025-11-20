import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

export default function App() {
  return (
    <>
      <BrowserRouter basename = "/">
      <Routes>

        <Route path = "/" element = {<Body />} >

        <Route path = "/login" element = {<Login />} />
        <Route path = "/profile" element = {<rofile />} />

        </Route>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}
