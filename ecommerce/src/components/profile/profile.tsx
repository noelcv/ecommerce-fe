import { FunctionComponent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
} from '../../services/authentication/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { defineRole } from '../../redux/reducers/user/createUserSlice';
import { RoleEnum } from '../../types/RoleEnum';
import { RootState } from '../../redux/store';

const ProfileComponent: FunctionComponent = () => {
  const [user, loading, error] = useAuthState(auth);
  const selectedUser = useSelector((state: RootState) => state.createUser.value)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  return (
    <div className="pb-5 border-8">
      <div>{error && error.message}</div>

      <div className="ml-flex flex-col justify-center w-72 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12 3xl:ml-20">
      <h1>Profile</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img src="" alt="profile-picture"/>
        </div>
        <div className='grid col-start-1 col-end-1'>
          <span>Username</span>
          <span>First Name</span>
          <span>Last Name</span>
          <span>Bio</span>
          <span>Email</span>
        </div>
        <div className='grid col-start-3 col-end-3'>
          <span>{selectedUser.username}</span>
          <span>{selectedUser.firstName}</span>
          <span>{selectedUser.lastName}</span>
          <span>Bio</span>
          <span>{selectedUser.email}</span>
        </div>
      </div>
      
      </div>
      
      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>
    </div>
  );
};

export default ProfileComponent;
