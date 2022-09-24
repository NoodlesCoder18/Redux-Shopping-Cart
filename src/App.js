import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Login from "./components/Login"
import { AuthProvider } from './components/auth';
import Profile from './components/Profile';
import RequireAuth from './components/RequireAuth';
import Products from './pages/Products';



function App() {
  return (
  <AuthProvider>
   <Header />
   
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={
     <RequireAuth>
      <CardsDetails />
     </RequireAuth>
     } />
     <Route path='/profile' element={<Profile />} />
     <Route path='/login' element={<Login />} />   
     <Route path='/products/:id' element={<Products/>} >    
     </Route>

   </Routes>
   </AuthProvider>
  );
}

export default App;
