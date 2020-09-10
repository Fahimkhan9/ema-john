import React, { useState } from 'react';

 import auth,{providerGoogle, providerFacebook} from './firebase'
import { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';


function Login() {
  const [newUser,setNewUser ] = useState(false)
  const [user,setUser] = useState({
    isSignedIn: false,
    user:'',
    email: '',
    photo: '',
    password: '',

    suc: false

  })

  const [loggedinUser, setLoggedinUser] = useContext(UserContext )

const history = useHistory()
const location = useLocation()
let { from } = location.state || { from: { pathname: "/" } };


  const signingoogle  = () => {
auth.signInWithPopup(providerGoogle)
.then(res => {
  console.log(res)
const {displayName,photoURL,email} = res.user
const signedInUser = {
  isSignedIn: true,
  name: displayName,
  email: email,
  photo: photoURL
   
}
setUser(signedInUser)
console.log(displayName);
console.log(email);
const newUserInfo = {...user}
newUserInfo.err = ''
newUserInfo.suc = true
setUser(newUserInfo)
setLoggedinUser(res.user.email)
history.replace(from);

})
.catch(err => alert(err))
  }
  const signout =() => {
   alert("sign out")
   auth.signOut()
   .then(result => {
    const signedOut = {
      isSignedIn: false,
      user:'',
      email: '',
      photo: ''
     }
     setUser(signedOut)
   })
   .catch(err => {
  alert(err)
   })
  }

const handleSubmit = (e) => {
  e.preventDefault()
  // console.log(user.email, user.password);
  // create new user

if (newUser && user.email && user.password) {
auth.createUserWithEmailAndPassword(user.email,user.password)
.then(
  res=> {
    const newUserInfo = {...user}
    newUserInfo.err = ''
    newUserInfo.suc = true
    setUser(newUserInfo)
    updateUserInfo(user.name)
    console.log(res);
  }
)
.catch(err => {
  const newUserInfo = {...user}
  newUserInfo.err =  err.message
  newUserInfo.suc = false
  setUser(newUserInfo)
})

}
///sign in user
if(!newUser && user.email && user.password){
  auth.signInWithEmailAndPassword(user.email,user.password)
.then(res => {
  const newUserInfo = {...user}
  newUserInfo.err = ''
  newUserInfo.suc = true
  setUser(newUserInfo)
setLoggedinUser(newUserInfo)
  console.log(res.user);
})
.catch(err => {
  console.log(err);
  const newUserInfo = {...user}
  newUserInfo.err =  err.message
  newUserInfo.suc = false
  setUser(newUserInfo)
})
}
}

const handleBlur = (e) => {
let isformvalid
if (e.target.name === "email") {
  isformvalid = /\S+@\S+\.\S+/.test(e.target.value)
 
}
 if (e.target.name === "password"){
  isformvalid= e.target.value.length > 6

}
if(isformvalid){
const newUserInfo =  {...user,}
newUserInfo[e.target.name] = e.target.value
setUser(newUserInfo)
}
}

const updateUserInfo = (name) => {
  const user = auth.currentUser;

  user.updateProfile({
    displayName: name,
    
  }).then(function() {
    // Update successful.
    console.log("updated success");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}
const fblogin  =( ) => {
  auth.signInWithPopup(providerFacebook).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


  return (
    <div className="App">
 { user.isSignedIn ? 
  <button onClick={signout}
    style={{padding:"20px",background:"blue",color:"white",border:"none",borderRadius:'20px',}}>SIGN out</button> 
  : 
   <button onClick={signingoogle} style={{padding:"20px",background:"blue",color:"white",border:"none",borderRadius:'20px',}}>SIGN IN  WITH GOOGLE</button>}

      <button onClick={fblogin} style={{padding:"20px",background:"blue",color:"white",border:"none",borderRadius:'20px',}}>SIGN IN  WITH FACEBOOK</button>
      {
        user.isSignedIn && <div><p>Welcome {user.name}</p>
        <img src={user.photoURL} alt="" />
        
        </div>
        
      }
<h1>Our Own Authentication</h1>
    {/* <p>Email: {user.email}</p>
    <p>Name: {user.name}</p>
    <p>{user.password}</p> */}
    <label htmlFor="newUser">New USer SignUp</label>
    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
<form onSubmit={handleSubmit} >
  {newUser && <input type="text" name="name" placeholder="Enter your Name " onBlur={handleBlur} />}
  <br/>
  <input type="text" name="email" placeholder="Enter your E-mail" onBlur={handleBlur} required />
 <br/>
 <input type="text" name="password" placeholder="Enter your password" onBlur={handleBlur
}  required />
 <br/>
 <button>{ newUser ? "SignUp" : "singin"}</button>
</form>
<p>{user.err}</p>
{user.suc && <p> {newUser ? "success" : 'login'}</p> }
    </div>
  );
}

export default Login;
