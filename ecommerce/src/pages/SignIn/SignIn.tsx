import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const SignInPage: FunctionComponent = () => {
  return (
    <div>
      <h3 className="flex justify-center ml-5 mt-12 ">New to Mindfulness.vc?</h3>

      <Link to="/register">
        <button
          type="button"
          className=" flex justify-center rounded ml-14 py-2.5 text-white text-lg hover:opacity-90 border-none"
        >
          Create New Account
        </button>
      </Link>

      <h3 className="flex justify-center mt-12 ml-5 md:ml-5">
        Already have an account?
      </h3>
      <button className="flex justify-center -mt-2 ml-32 mb-96 md:ml-32 w-fit bg-red-300 text-zinc-900 font-bold">
        Login
      </button>
      <div className="ml-20 mt-2 md:ml-12 w-fit xl:ml-32 space-x-2 flex flex-end"></div>

    </div>
  );
};

export default SignInPage;
