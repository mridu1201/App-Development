import React, { createContext, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';
import api from './axiosInstances';
import API_ENDPOINTS from './axiosEndpoints';

const StatesContext = createContext();

export const States = ({ children }) => {

  const dispatch=useDispatch();

  const[logindata,setLogindata]=useState({
    email:"",
    firstname:"",
    lastname:"",
    age:"",
    password:"",
  })


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState(0);
  const [pwderror, setPwderror] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  // Signup
  const SignUp = (uid) => {
    api
      .post(API_ENDPOINTS.SIGNUP, {
        uid:uid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        age: age,
        role:'USER',
      })
      .then((res) => {
        
        let err=res.data;
        console.log(res.data);
        if(err==='Sommething went wrong!'){
          toast.error("Account already exists")
        }
        dispatch(login({
          email :email,
          firstname: firstname,
          lastname: lastname,
          age: age
        }))        
      });      
      // Navigation
      // navigate('/home');
    };

    const handleSignin = (e) => {
      setLogindata({ ...logindata, [e.target.uid]: e.target.value })
    }
    
      // SignIn
      const SignIn = (e) => {
        e.preventDefault();
      

        api
          .post(API_ENDPOINTS.LOGIN, { email, password })
          .then((res) => {

            const { token, uid } = res.data;
      
            localStorage.setItem('token', token);
            localStorage.setItem('userId', uid);
      
            console.log(res.data);
      
           
            if (token) {
              setError('');
              toast.success('Login Successful');
      
              dispatch(login({ email }));
      
           
              navigate('/home');
            } else {
              setError('*Invalid Email id or Password');
            }
      
            console.log('Email:', email);
            console.log('password:', password);
          })
          .catch((error) => {
            setError('*An error occurred while logging in');
          });
      };

    //password
    const validatePassword = (password) => {
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    
      if (password.length < minLength) {
        return false;
      }
    
      if (!uppercaseRegex.test(password)) {
        return false;
      }
    
      if (!specialCharRegex.test(password)) {
        return false;
      }
    
      return true;
    };
    
    const pwdmatch = (e) => {
      e.preventDefault(e);
      if (validatePassword(password)&&password === confirmPassword) {
        SignUp();
        toast.success('Account Successfully Created');
      } else if (!((password === confirmPassword))) {
        
        toast.error('Please enter the same password');
      }else if(!(validatePassword(password)))
      {
        setPwderror('*Make sure that there are 8 characters, 1 uppercase letter, 1 speacial character')
      }
    };

    const onEdit = async (e) => {
      const uid=localStorage.getItem('userId');
      e.preventDefault();
      api
      .put(API_ENDPOINTS.EDIT_PROFILE+`/${uid}`, {
        firstname:firstname,
        lastname:lastname,
        email:email,
        age:age,
      });
      navigate("/profile");
    };
const[user,setUser]=useState()
    const loadUser =async()=>{
      const uid=localStorage.getItem('userId');
      const result =await 
      api
      .get(API_ENDPOINTS.PROFILE+`/${uid}`);
      setUser(result.data);
  }

  //Navigation
  const gotoLogin = () => {
    navigate('/login');
  };

  const gotoHomePage = () => {
    navigate('/home');
  };



  //Application

  const[name,setName]=useState("");
  const[fathername,setFathername]=useState("");
  const[emis,setEmis]=useState("");
  const[occupation,setOccupation]=useState("");
  const[mobile,setMobile]=useState("");
  const[gender,setGender]=useState("");
  const[appemail,setAppemail]=useState("");
  const[address,setAddress]=useState("");
  const[submitted,setSubmitted]=useState(false);
  const ApplicationSubmit = (aid) => {
    aid.preventDefault();
    const uid = localStorage.getItem('userId');
  
    const data = {
      aid: aid,
      name: name,
      fathername: fathername,
      emis: emis,
      occupation: occupation,
      mobile: mobile,
      gender: gender,
      appemail: appemail,
      address: address,
      submitted: true,
    };
  
    api
      .post(API_ENDPOINTS.SUBMIT_APPLICATION + `/${uid}`, data)
      .then((res) => {
        console.log(res); // Log the entire response to see its structure
          toast.success('Successfully Submitted');
          navigate('/home');
      })
      // .catch((error) => {
      //   console.error('Error:', error);
      //   // Handle the error, e.g., show an error message to the user
      // });
  };
  
  

  return (
    <div>
      <Toaster />
      <StatesContext.Provider
        value={{
          firstname,
          setFirstname,
          lastname,
          setLastname,
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
          age,
          setAge,
          SignUp,
          navigate,
          gotoLogin,
          gotoHomePage,
          pwdmatch,
          pwderror,
          setPwderror,
          error,
          setError,
          SignIn,
          handleSignin,
          onEdit,
          loadUser,
          name,
          fathername,
          emis,
          appemail,
          address,
          submitted,
          address,
          gender,
          mobile,
          occupation,
          setName,
          setFathername,
          setEmis,
          setAppemail,
          setAddress,
          setSubmitted,
          setGender,
          setMobile,
          setOccupation,
          ApplicationSubmit
          // logindata,
          // setLogindata,
          // SignUpDetails,
        }}
      >
        {children}
      </StatesContext.Provider>
    </div>
  );
};



export const useStates = () => useContext(StatesContext);
// export default connect(mapStateToProps, mapDispatchToProps)(States);
