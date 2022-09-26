import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminPage from './pages/Admin';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import { useAuthState } from 'react-firebase-hooks/auth';
import RegisterPage from './pages/Register';

function App() {
  // const [user, loading] = useAuthState();
  
  return (
    <Router>
      <div className="max-w-xs m-0 top-0">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
