import './App.css';
import { Login } from './components/login';
import { Signup } from './components/signup';
import {useDispatch, useSelector} from 'react-redux'
import {showPage, noShowPage} from './Features/RedLogin'
import {showPage1, noShowPage1} from './Features/RedSignup'


function App() {
  const open = useSelector(state=>state.RedLogin.value)
  const open1 = useSelector(state=>state.RedSignup.value)

  const dispatch = useDispatch()

  const show = () => {
    dispatch(showPage(true))
  } 

  const show1 = () => {
    dispatch(showPage1(true))
  }

  return (
    <div className="App">
      <button onClick={show}>Login</button> 
      {open && <Login/>}

      <button onClick = {show1}>SignUp</button>
      {open1 && <Signup/>}
    </div>
  );
}

export default App;
