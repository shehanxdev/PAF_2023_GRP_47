import React,{useState} from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Login } from 'mdb-react-ui-kit';

import Login from './screen/loginScreen/components/Login';
//import Register from './screen/registerScreen/components/Register';


function App() {
//   const [currentForm, setCurrentForm] = useState(Login);

// const toggleFrom = (formName)=> {
//   setCurrentForm(formName);
// }

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleFrom}/> : <Register onFormSwitch={toggleFrom}/>
      }
     */}
     
      {/* <Login/> */}
      <Register/>
    
   
    </div>
  );
}

export default App;
