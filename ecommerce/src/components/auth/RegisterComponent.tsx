import { Icon } from '@mui/material';
import { useEffect, useState, FunctionComponent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/authentication/authentication';
import GoogleIcon from '@mui/icons-material/Google';

const RegisterComponent: FunctionComponent = () => {
  const [user, loading, error] = useAuthState(auth);

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
        <div className="ml-flex flex-col justify-center w-56 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12 3xl:ml-20 md:w-72 lg:w-80 xl:w-96">
          <h3 className="font-bold text-#242424 -mt-0.5 -mb-0.5 md:mb-0 md:mt-0 text-lg md:text-3xl block">
            New to Mindfulness.vc? Register here
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
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
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
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
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
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
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
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
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
                className="bg-zinc-300 text-zinc-900 font-bold h-10 text-sm pl-1"
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
              <span className="mt-1.5 ml-28 md:ml-36 font-extrabold text-xl">
                - or -
              </span>

              <button className="flex mt-2 ml-8 md:ml-12 w-fit bg-blue-900" onClick={signInWithGoogle}>
                <GoogleIcon fontSize="large" />
                <span className="mt-1.5 ml-2">Register With Google</span>
              </button>
              
              <h3 className="ml-8 md:ml-16">Already have an account?</h3>
              <button className="flex mt-2 ml-24 md:ml-12 w-fit bg-red-300 text-zinc-900 font-bold">
              Login
              </button>
            </div>
      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>
    </div>
  );
};

export default RegisterComponent;
