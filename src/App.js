
import './App.css';
import Detail from './Detail';
import UserList from './UserList';
import { Routes ,Route } from 'react-router';
import {Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='h1'  to={'/'}><h1 style={{color:"whitesmoke"}}>List of user</h1></Link>
        <Link to={'/'} className='home'>Home</Link>
      </nav>
      <Routes >
        <Route path='/' element={<UserList/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
