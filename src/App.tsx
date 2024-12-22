import React from 'react' 
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import 'bulma/css/bulma.min.css'
import './App.css'
function App() {
 return (
   <div className="app-container has-background-white-ter">
     <Menu />
     <div className="main-content">
       <Home title="Bienvenido a Motorgo" subtitle="El lugar para encontrar tu proximo vehiculo" description="" />
     </div>
   </div>
 )
}

export default App