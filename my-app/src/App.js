import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let user = "login"

  return (
    <>
      <h1 className='hello'>hello</h1>
      {user === "login" ? <Login user={user} /> : <Login user={user} />
      }
    </>

  );
}

export default App;
