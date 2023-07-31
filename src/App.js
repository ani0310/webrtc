import logo from './logo.svg';
import './App.css';
import { Routes,Route,BrowserRouter,Outlet ,Navigate} from 'react-router-dom';
import  Home  from './Home/Home';
import Navigation from './components/shared/navigation/Navigation';
import Register from './register/Register';
import Login from './login/Login'
import Authenticate from './authenticate/Authenticate';
import Activate from './activate/Activate';
import Rooms from './rooms/Rooms';
const isAuth=false;
const user={
  active:false
}
function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation></Navigation>
      
      <Routes>
        <Route element={<GuestRoute/>}>
            <Route path="/authenticate" element={<Authenticate/>}></Route>
            <Route path="/" element={<Home/>}></Route>

        </Route>
        <Route element={<SemiPrivatRoute/>}>
          <Route path='/activate' element={<Activate/>}></Route>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path='/rooms' element={<Rooms/>}></Route>
        </Route>
     
      </Routes>
      </BrowserRouter>
    
    </>
  );
}
const GuestRoute =()=>{
  console.log(isAuth,'issssg')

   return (
    !isAuth?<Outlet/>:<Navigate to='/rooms'/>

   );
}
const SemiPrivatRoute =()=>{
  console.log(isAuth,'issssS')
  return (
   !isAuth?<Navigate to='/'/>: isAuth && !user.active?
   
   
   <Outlet/>:<Navigate to='/rooms'/>

  );
}
const ProtectedRoute =()=>{
  console.log(isAuth,'issssP')

  return (
   !isAuth?<Navigate to='/'/>: isAuth && !user.active?
   
   
   <Navigate to='/activate'/>:<Outlet/>

  );
}

export default App;
