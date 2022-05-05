import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Profile from "./components/Profile"
import Registration from "./components/pages/auth/Registration"
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Sidebar from './Component/Sidebar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="dashboard" element={<Sidebar/>}/>
            <Route path="Profile" element ={<Profile />}></Route>
            <Route path="Registration" element ={<Registration />}></Route>
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;