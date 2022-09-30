import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../redux/reducers/user/createUserSlice';
import { userExists } from '../../redux/reducers/user/userExistsLoginUiSlice';
import { RootState } from '../../redux/store';
import { signInWithGoogle } from '../../services/authentication/authentication';
import { findUser } from '../../services/user/findUser';
import { UserType } from '../../types/UserType';

const SignInPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const userExistsUi = useSelector(
    (state: RootState) => state.userExists.value
  );
  console.log('userExists', userExistsUi);
  const signInHandler = async (): Promise<void> => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        //TODO: add validation logic to check if user already exists
        // query gqlAPI with user.uid
        console.log('user signed in at component', user);

        // const token = await user
        //   .getIdTokenResult()
        //   .then((idTokenResult) => idTokenResult.token);
        //TODO: send token to backend after updating schema

        //communicate with backend to create user in database
        const responseUser: UserType = await findUser(
          user as unknown as UserType
        );
        console.log('responseUser', responseUser);
        //this action sets authenticated User in redux store
        if (responseUser) {
          dispatch(userExists(true));
          dispatch(setUser(responseUser));
        } else {
          dispatch(userExists(false));
          console.log(
            'User does not exist. Please, click on the Create New Account button to sign up'
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3 className="flex justify-center ml-5 mt-12 ">
        New to Mindfulness.vc?
      </h3>

      <Link to="/register">
        <button
          type="button"
          className=" flex justify-center rounded ml-14 py-2.5 text-white text-lg hover:opacity-90 border-none"
        >
          Create New Account
        </button>
      </Link>

      {userExistsUi ? (
        <div>
          <h3 className="flex justify-center mt-12 ml-5 md:ml-5">
          Already have an account?
        </h3>
        <button
          onClick={signInHandler}
          className="flex justify-center -mt-2 ml-32 mb-96 md:ml-32 w-fit bg-red-300 text-zinc-900 font-bold"
        >
          Login
        </button>
        </div>
      ) : (
        <div className="mb-96">
          <span className="flex animate-pulse justify-center text-center ml-5 mt-12 text-red-500 text-lg italic">
            ⚠️ User does not exist ⚠️ 
          </span>
          <span className="flex justify-center text-center ml-5 mt-1  text-red-500 text-md italic">
          Please, click on the Create New Account button to sign up
        </span>
        </div>
      )}

      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>
    </div>
  );
};

export default SignInPage;
