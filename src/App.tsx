import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Login from './components/login/Login';
import AuthCallback from './components/auth/AuthCallback';
import 'bulma/css/bulma.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="app-container has-background-white-ter" data-testid="app">
      <Menu />
      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                title="Bienvenido a Motorgo" 
                subtitle="El lugar para encontrar tu próximo vehículo" 
                description="" 
              />
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* Agrega más rutas aquí según sea necesario */}
        </Routes>
      </div>
    </div>
  );
}

export default App;