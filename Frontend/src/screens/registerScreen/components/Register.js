// import React from 'react';
// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// //import axios from './api/axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if button enabled with JS hack
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//         try {
//             const response = await axios.post(REGISTER_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(response?.data);
//             console.log(response?.accessToken);
//             console.log(JSON.stringify(response))
//             setSuccess(true);
//             //clear state and controlled inputs
//             //need value attrib on inputs for this
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('Username Taken');
//             } else {
//                 setErrMsg('Registration Failed')
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             Username:
//                             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>


//                         <label htmlFor="password">
//                             Password:
//                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>


//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must match the first password input field.
//                         </p>

//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                     </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign In</a>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Register





























import React, {useState} from 'react';
import './Register.css';
//import {useRef, useState, useEffect } from React
//import fc01 from './fc01.png';
//import { Register } from 'mdb-react-ui-kit';
//import { MDBSelect } from 'mdb-react-ui-kit';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
 
}
from 'mdb-react-ui-kit';

export const Register = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  
   }


  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>



              <MDBCol md='6'  className="d-none d-md-block" >
                <MDBCardImage img src="./fc01.png" alt="fc01" className="rounded-start" fluid/>
              </MDBCol>
              
              <MDBCol md='6'>
              
                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">𝖋𝖔𝖔𝖉𝖎𝖊𝖘 🍟 🍩 ＦㄖㄖĎＩᵉ𝓈  🐉  🎀  𝒻💞🍑𝒹𝒾𝑒𝓈  🎀 🍓</h3>

                  {/* <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol> */}

                  {/* </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div>

                  <MDBRow> */}

                    {/* <MDBCol md='6'>
                  
                    </MDBCol>

                    <MDBCol md='6'>
                   
                    </MDBCol>

                  </MDBRow> */}
                 <MDBCard>

                 <text class='tex'>Sign Up</text>

                  <div class='rg'>
                  

                  <MDBInput wrapperClass='mb-4' label='First Name' htmlFor="fname" value={fname} fname="fname" placeholder="First Name" size='lg' id='form1' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Last Name' htmlFor="lname" value={lname} lname="lname" placeholder="Last Name" size='lg' id='form2' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Email' htmlFor="email" size='lg' id='form4' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Password' htmlFor="password" size='lg' id='form5' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='form6' type='text'/>

                  <div className="d-flex justify-content">
                    <div class='subbtn'>
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg'>Register</MDBBtn>
                    </div>
                  </div>
                  </div>
                  </MDBCard>
                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;