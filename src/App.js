// import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
         <h1> Auth0 with ReactJS</h1>
        <Logout />
       <Profile/>
        <Login />
    </div>

  );
}

export default App;
