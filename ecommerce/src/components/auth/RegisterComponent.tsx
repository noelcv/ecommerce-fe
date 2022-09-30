import { FunctionComponent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/authentication/authentication';
import GoogleIcon from '@mui/icons-material/Google';
import { UserType } from '../../types/UserType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { RoleEnum } from '../../types/RoleEnum';
import { createUser } from '../../services/user/createUser';
import { setUser } from '../../redux/reducers/user/createUserSlice';

const RegisterComponent: FunctionComponent = () => {
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const selectedRole = useSelector((state: RootState) => state.createUser.value.role);
  const ourUser = useSelector((state: RootState) => state.createUser.value);
  
  console.log("our user now", ourUser)
  // const navigate = useNavigate();
  // // useEffect (() => {
  // //   if (user !== null) {
  // //     navigate('/')
  // //   }
  // // }, [user])

  const signInWithGoogleHandler = async (): Promise<void> => {
    try {
     const user = await signInWithGoogle();
     if (user) {
      console.log('user signed in at component', user)
      const token = await user.getIdTokenResult().then((idTokenResult) => idTokenResult.token)
      //TODO: send token to backend after updating schema
      const newUser: UserType = {
        uid: user.uid,
        email: user.email as string,
        username: user.displayName as string,
        //TODO: update schema to include profile
        // profile: {
        //   picture: user.photoURL as string
        // },
        role: selectedRole as RoleEnum
      }
      
      
  
      //communicate with backend to create user in database
      const responseUser: UserType = await createUser(newUser)
      
      //this action sets authenticated User in redux store
      dispatch(setUser(responseUser))
      
  
      // const accountInfo = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token).then((res) => res.json())
      // if (accountInfo) {
      //   console.log(accountInfo, 'accountInfo')
      // }
      
    }
    } catch (error) {
      console.log(error);

    }
  }
  
  const registerNewUserHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = form.elements as typeof form.elements & {
        registerName: HTMLInputElement;
        registerEmail: HTMLInputElement;
        registerPassword: HTMLInputElement;
      };

      const newUser: any = {
        name: formData.registerName.value,
        email: formData.registerEmail.value,
        password: formData.registerPassword.value,
      };

      await registerWithEmailAndPassword(newUser.email, newUser.password);
      //TODO: implement dispatch(addNewUserToDbAction(newUser));
      form.reset();
    } catch (err) {
      console.log('Error submitting product', err);
    }
  };

  return (
    <div className="pb-5">
      <div>{error && error.message}</div>
      <form onSubmit={registerNewUserHandler}>
        <div className="ml-flex flex-col justify-center w-56 ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12 3xl:ml-20 md:w-72 lg:w-80 xl:w-96">
          <h3 className="font-bold text-#242424 -mt-0.5 -mb-0.5 md:mb-0 md:mt-0 text-lg md:text-3xl block">
            Enter details
          </h3>
          <div className="grid col-span">
            <div className="flex flex-col mb-5 md:mt-2">
              <label htmlFor="registerFirstName" className="text-lg">
               First Name
              </label>
              <input
                id="register-first-name"
                type="text"
                name="registerFirstName"
                placeholder="What is your first name?"
                className="bg-zinc-300 text-zinc-900 font-bold h-8 text-sm pl-1 -mb-3 md:mb-0"
                required
              />
            </div>
            <div className="flex flex-col mb-5 md:mt-2">
              <label htmlFor="registerLastName" className="text-lg">
                Last Name
              </label>
              <input
                id="register-last-name"
                type="text"
                name="registerLastName"
                placeholder="What is your surname?"
                className="bg-zinc-300 text-zinc-900 font-bold h-8 text-sm pl-1 -mb-3 md:mb-0"
                required
              />
            </div>
            <div className="flex flex-col mb-5 md:mt-2">
              <label htmlFor="registerUsername" className="text-lg">
                Username
              </label>
              <input
                id="register-username"
                type="text"
                name="registerUsername"
                placeholder="How would like to be called?"
                className="bg-zinc-300 text-zinc-900 font-bold h-8 text-sm pl-1 -mb-3 md:mb-0"
                required
              />
            </div>
            <div className="flex flex-col mb-5 md:mt-2">
              <label htmlFor="registerEmail" className="text-lg">
                Email
              </label>
              <input
                id="register-email"
                type="text"
                name="registerEmail"
                placeholder="What is your email?"
                className="bg-zinc-300 text-zinc-900 font-bold h-8 text-sm pl-1 -mb-3 md:mb-0"
                required
              />
            </div>

            <div className="flex flex-col mb-5 md:mt-2">
              <label htmlFor="registerPassword" className="text-lg">
                Password
              </label>
              <input
                id="register-password"
                type="text"
                name="registerPassword"
                placeholder="Write a safe password"
                className="bg-zinc-300 text-zinc-900 font-bold h-8 text-sm pl-1 -mb-3 md:mb-0"
                required
              />
            </div>

            <div className="ml-6 md:ml-24 xl:ml-32 md:mt-2 space-x-2 flex flex-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  console.log('back to homepage replace with navigate')
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded px-12 py-2.5 text-white text-lg hover:opacity-90 border-none"
              >
                Register
              </button>
            </div>
            
          </div>
        </div>
      </form>
      <div className="flex flex-col ml-1 md:ml-12">
              <span className="mt-1.5 ml-32 md:ml-36 font-extrabold text-xl">
                - or -
              </span>

              <button className="flex mt-2 ml-10 md:ml-12 w-fit bg-blue-900" onClick={signInWithGoogleHandler}>
                <GoogleIcon fontSize="large" />
                <span className="mt-1.5 ml-2">Register With Google</span>
              </button>
              
        
            </div>
      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>
    </div>
  );
};

export default RegisterComponent;
