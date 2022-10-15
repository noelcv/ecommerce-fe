import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminPage from './pages/Admin';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import { useAuthState } from 'react-firebase-hooks/auth';
import RegisterPage from './pages/SignIn/RegisterPage';
import SignInPage from './pages/SignIn/SignIn';
import SelectAccountType from './pages/SignIn/SelectAcount';
import MyOrdersPage from './pages/MyOrdersPage';
import ProfileComponent from './components/profile/ProfileComponent';

function App() {
  // const [user, loading] = useAuthState();
  
  return (
    <Router>
      <div className="max-w-xs m-0 top-0">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/register/" element={<SelectAccountType/>}/>
          <Route path="/register/details" element={<RegisterPage/>}/>
          <Route path="/profile" element={<ProfileComponent/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/myorders" element={<MyOrdersPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
