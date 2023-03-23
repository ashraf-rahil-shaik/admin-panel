
import './App.css';
import AdminLogin from './components/AdminLogin';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Routes>
                <Route path='/' element ={<AdminLogin/>} />
    
              </Routes>
    
    </div>
  );
}

export default App;
