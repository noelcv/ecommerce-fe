import { Icon } from '@mui/material';
import { useEffect, useState, FunctionComponent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../services/authentication/authentication';
import GoogleIcon from '@mui/icons-material/Google';

const AccountTypeComponent: FunctionComponent = () => {
  const [user, loading, error] = useAuthState(auth);
  const [selectedOption, setSelectedOption] = useState<string>('BASIC')

  const isOptionSelected = (value: string) => selectedOption  === value
  console.log(selectedOption, 'selected NOW')
  const changeSelectedOption = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(e.currentTarget.value)
  }

  return (
    <div className="pb-5 border-8">
      <div>{error && error.message}</div>

      <div className="ml-flex flex-col justify-center w-72 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 2xl:ml-12 3xl:ml-20">
        <fieldset className="ml-2 mr-2 grid col-span rounded mt-2 mb-5 max-w-md md:max-w-xl">
        <legend className="font-bold text-#242424 -mt-0.5 -mb-0.5 md:mb-0 md:mt-0 text-lg md:text-3xl block">
          Choose your account type
        </legend>
          <div className="flex flex-col active:bg-zinc-200">
            <div className="flex flex-row mb-5 md:mt-2 ">
              <input
                id="basic-account"
                type="radio"
                name="basic-account"
                value="BASIC"
                checked={isOptionSelected('BASIC')}
                onChange={changeSelectedOption}
                className="bg-zinc-300"
              />
              <label htmlFor="basic-account" className="text-lg ml-2 font-bold">
                Basic
              </label>
            </div>
            <span className="ml-7 -mt-5 mb-10 italic">
              {' '}
              I want to browse and attend events, classes and online sessions
            </span>
          </div>
          <div className="flex flex-col  active:bg-zinc-200">
            <div className="flex flex-row mb-5 md:mt-2 ">
              <input
                id="pro-account"
                type="radio"
                name="pro-account"
                value="PRO"
                checked={isOptionSelected('PRO')}
                onChange={changeSelectedOption}
                className="bg-zinc-300 cursor-auto"
              />
              <label htmlFor="pro-account" className="text-lg ml-2 font-bold">
                Pro
              </label>
            </div>

            <span className="ml-7 -mt-5 mb-8 italic">
              I want to create events, classes or online sessions, and collect payments.
            </span>
          </div>
        </fieldset>
        <div className="ml-2 md:ml-24 xl:ml-32 md:mt-2 space-x-2 flex flex-end">
          <button
            type="reset"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              console.log('back to homepage replace with navigate')
            }
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded px-12 py-2.5 text-white text-lg hover:opacity-90 border-none"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="flex flex-col ml-1 md:ml-12">
        <h3 className="ml-8 md:ml-16">Already have an account?</h3>
        <button className="flex -mt-2 ml-24 md:ml-12 w-fit bg-red-300 text-zinc-900 font-bold">
          Login
        </button>
      </div>
      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>
    </div>
  );
};

export default AccountTypeComponent;
