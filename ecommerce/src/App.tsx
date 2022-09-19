import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminPage from './pages/Admin';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="max-w-xs m-0 top-0">
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
