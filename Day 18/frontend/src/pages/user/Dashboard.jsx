import { useEffect, useState } from 'react';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import '../../assets/css/profile-page.css'
import Navbar from '../../assets/components/NavBar';
import ProfileCard1 from '../../assets/components/ProfileCard1';
import ProfileCard2 from '../../assets/components/ProfileCard2';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import UserUpdateModal from '../../assets/components/UserUpdateModal';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const token = localStorage.getItem('token');
  const uid = localStorage.getItem('userId');

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (token && uid) {

      api
        .get(API_ENDPOINTS.PROFILE + `/${uid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {

          const userProfileData = res.data;
          setUserProfile(userProfileData);
        })
        .catch((error) => {
          // Handle errors when fetching the user's profile
          console.error('Error fetching user profile:', error);
        });
    }
  }, [token, uid]);

  return (
    
    <div className='profile-maindiv'>
      
      <div className="profile-nav">
        <Navbar/>
      </div>
      
      <div className='profile-bg'>
        <img src="https://images4.alphacoders.com/618/618580.jpg" alt="" className='profile-bg-img' />
      </div>
      <div className='profile-bg profile-picture'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="profile-img" />
      </div>
      {userProfile ? (
      <div className='profile-bg profile-details'>
        <p className='profile-name'>{userProfile.firstname} {userProfile.lastname}</p>
        <p className='profile-age'><strong>Age: </strong>{userProfile.age}</p>
        <p className='profile-email'>{userProfile.email}</p>
        <Link to='/editprofile'><div><ModeEditIcon className='profile-edit'/></div></Link>
        {/* <UserUpdateModal isOpen={isModalOpen} onClose={closeModal} /> */}
      </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      <div className='profile-bg profile-complete'>
        <div className="profile-others">
          <div className="application-status"><ProfileCard1/></div>
          <div className="payment-details"><ProfileCard2/></div>
        </div>
      </div>
      {/* {userProfile ? (
        <div>
          <h2>User Profile</h2>
          <p>First Name: {userProfile.firstname}</p>
          <p>Last Name: {userProfile.lastname}</p>
          <p>Email: {userProfile.email}</p>
          <p>Age: {userProfile.age}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )} */}

    </div>
  );
};

export default Dashboard;

