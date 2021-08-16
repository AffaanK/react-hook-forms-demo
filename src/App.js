import './App.css';
import { Route, Link } from 'react-router-dom'
import {useState} from 'react'
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
function App() {
  const [usersData,setUsersData] = useState([{
    "name":"affaan",
    "email":"affaan@gmail.com",
    "contact_number":"123654",
    "gender":"Male"
},])

  const addUser= (formData)=>{
    setUsersData([formData,...usersData])
  }
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link to='/dashboard'>
            <a className="nav-link active">
              dashboard
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/signup'>
            <a className="nav-link active">
              sign up
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login'>
            <a className="nav-link active">
              Login
            </a>
          </Link>
        </li>
      </ul>
    <div className="App">
      
      <div>
         <Route path="/login" render={ props=><Login {...props}/> } />
         <Route path="/user-profile" component={ UserProfile } />
         <Route path="/signup" render={props=><RegistrationForm {...props} addUser={addUser}/>} />
         <Route path="/dashboard" render={props=><Dashboard usersData={usersData}/>}/>
      </div>
      
      {/* <TestForm/> */}
    </div>
    </>
  );
}

export default App;
