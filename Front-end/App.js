import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import Nomatch from "./component/Nomatch";
import Product from "./component/Product";
import New from "./component/New";
import Best from "./component/Best";
import Order from "./component/Order";
import User from "./component/User";
import UserDet from "./component/UserDet";
import Profile from "./component/Profile";
import Login from "./component/Login";
import RequiredAuth from "./component/RequiredAuth";
import {AuthProvider} from "./component/auth";
import Signup from './component/Signup'
import LoginSuccess from "./component/LoginSuccess";
import SignupSuccess from "./component/SignupSuccess";
import BYS from "./component/BYS";
import Hall from "./component/Hall"
import BYSsuccess from "./component/BYSsuccess";
import BYS1 from "./component/bys1";
import SeeDB from "./component/SeeDB";
import Tasks from "./component/Tasks";
function App() {
  return (
    <div className="App">
      <Tasks />
      {/* <AuthProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About'element={<About/>}></Route>
      <Route path='/Service'element={<Service/>}/>
      <Route path='/Navbar'element={<Navbar/>}/>
      <Route path='*'element={<Nomatch/>}/>
      <Route path='/Product'element={<Product/>}>  
      <Route path="New" element={<New/>}/>
      <Route path="Best" element={<Best/>}/>
      <Route index element={<New/>}/>
      </Route>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/User" element={<User/>}/>
      <Route path=":userid" element={<UserDet/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/LoginSuccess" element={<LoginSuccess/>}/>
      <Route path="/SignupSuccess" element={<SignupSuccess/>}/>
      <Route path="/BYS" element={<RequiredAuth><BYS/></RequiredAuth>}/>
      <Route path="/BYSsuccess" element={<BYSsuccess/>}/>
      <Route path="/SeeDB" element={<SeeDB/>}/>
      </Routes>
      </AuthProvider> */}
    </div>
  );
}

export default App;
