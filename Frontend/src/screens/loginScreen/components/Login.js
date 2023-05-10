import React, {useState} from 'react';
import './Login.css'
//import {  } from 'mdb-react-ui-kit';

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCard
}
from 'mdb-react-ui-kit';

export const Login = () => {
 const [email, setEmail] = useState('');
 const [pass, setPass] = useState('');


 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);

 }

  //  function Login() { 
   return (  

   
<div class= 'out'>

    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="./food.png"  class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6' onSubmit={handleSubmit}>
<MDBCard>
<MDBCard class='cad'> 

<div class ='cd'>
          <MDBInput wrapperClass='mb-4' label='Email address' htmlFor="email" id='formControlLg' value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' htmlFor="password" id='formControlLg' value={pass} onChange={(e)=> setPass(e.target.value)} type='password' placeholder='Password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn type='submit' className="mb-4 w-100" size="lg">Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>
          </div>
          </MDBCard>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>

    </div>
  );
}

 export default Login;