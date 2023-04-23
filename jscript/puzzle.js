import {userstate} from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import {auth} from './firebase'
import "Registration.css";

document.querySelector('a'). onclick = function () {
  window.location.href = "Registration.html";
}

function App(){

  const [registername, setRegistername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
    const register=async()=>{
      try{
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch(error){
      console.log(error.message)
    }
  };
    const login=async()=>{

    }

}
