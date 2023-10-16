import { ArrowLeftOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStates } from '../../services/States';
import '../../assets/css/Application.css'

function Application() {


  const{
    setName,
    setFathername,
    setEmis,
    setAppemail,
    setAddress,
    setSubmitted,
    setGender,
    setMobile,
    setOccupation,
    ApplicationSubmit,
  }=useStates();

  return (
    <>
  <main className="body2">
  <Link to='/home'><ArrowLeftOutlined className="back-icon"/></Link>
  <form className="food-form" onSubmit={ApplicationSubmit}>
    <h1>🍌</h1> <br />
    <input
      type="text"
      placeholder="Name"
      name="name"
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="EMIS"
      name="emis"
      onChange={(e) => setEmis(e.target.value)}
    />
    <input
      type="text"
      placeholder="Father's Name"
      name="fathername"
      onChange={(e) => setFathername(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder="Email"
      name="appemail"
      onChange={(e) => setAppemail(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder="Phone Number"
      name="mobile"
      onChange={(e) => setMobile(e.target.value)}
    />
    <input
      type="text"
      placeholder="Gender"
      name="gender"
      onChange={(e) => setGender(e.target.value)}
    />
    <input
      type="text"
      placeholder="Occupation of the Parent"
      name="occupation"
      onChange={(e) => setOccupation(e.target.value)}
    />
    <input
    name="address"
    placeholder="Address"  
    cols="30" 
    rows="3"
    onChange={(e) => setAddress(e.target.value)}/>
    <input type="submit" defaultValue="Submit" id="submit" />
  </form>
</main>

  </>
  );
}

export default Application;
// import React, { useState } from 'react';
// import axios from 'axios';
// import api from '../../services/axiosInstances';
// import API_ENDPOINTS from '../../services/axiosEndpoints';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// function ApplicationForm({ onSubmit }) {
//   const navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     fathername: '',
//     emis: '',
//     occupation: '',
//     mobile: '',
//     gender: '',
//     appemail: '',
//     address: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const uid=localStorage.getItem('userId');

//     api
//       .post(API_ENDPOINTS.SUBMIT_APPLICATION+`/${uid}`, formData)
//       .then((response) => {
//         console.log(response.data);
//         toast.success("Successfully Submitted!")
//         onSubmit(response.data);
//         navigate("/home");
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form >
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="fathername"
//         placeholder="Father's Name"
//         value={formData.fathername}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="emis"
//         placeholder="EMIS"
//         value={formData.emis}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="occupation"
//         placeholder="Occupation of the Parent"
//         value={formData.occupation}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="mobile"
//         placeholder="Phone Number"
//         value={formData.mobile}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="gender"
//         placeholder="Gender"
//         value={formData.gender}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="appemail"
//         placeholder="Email"
//         value={formData.appemail}
//         onChange={handleChange}
//       />
//       <textarea
//         name="address"
//         placeholder="Address"
//         value={formData.address}
//         onChange={handleChange}
//       />
//       <button type="submit" onSubmit={handleSubmit}>Submit</button>
//     </form>
//   );
// }

// export default ApplicationForm;
