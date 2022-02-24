import TopBar from './components/topbar/Topbar';
import './App.css';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register'
function App() {
  return (
    <>
    <TopBar />
    <Login/>
    <Settings />
    </>
   
  );
}

export default App;
