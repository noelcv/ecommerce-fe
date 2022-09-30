import { FunctionComponent } from 'react';
import Mettakin from '../assets/Mettakin.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header: FunctionComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const isAuthUser = useSelector((state: RootState) => state.createUser.value.id);
  const username = useSelector((state: RootState) => state.createUser.value.username);
  
  return (
    <div className="grid grid-cols-12 md:flex md:flex-row pb-1 bg-zinc-800 sticky z-2 w-screen md:pr-32">
      <div className="grid col-start-1">
        <Link to="/">
          <img className="max-w-xs -ml-1 md:-ml-10 -mt-2 md:mt-2 mr-2" src={Mettakin} />
        </Link>
      </div>
      
      <div className="grid ml-12 col-start-1 col-end-2 grid-flow-col -mt-2 md:mt-0 md:col-end-10 md:flex md:flex-row md:mr-16">
        <Link to="/admin">
            <div className="flex flex-row justify-center -ml-16 mt-3 md:mr-20 md:mt-12 4xl:ml-96">
              <SettingsIcon fontSize="medium" />
            </div>
          </Link>
        <input
          className="h-8 md:h-10 grid mt-0 -ml-3 -mr-2 rounded-sm border-none text-zinc-900 md:w-96 md:mt-8 md:-ml-16 4xl:w-96 4xl:pr-96 4xl:mt-9"
          type="text"
          placeholder="Search"
        />
        <button className=" grid col-start-3 bg-red-300 w-12 md:w-16 h-12 md:h-14 -mt-92 md:mt-8 md:col-start-5 4xl:mt-9 4xl:w-20">
          <div className="-ml-2 md:ml-0">
          <SearchIcon />
          </div>
        </button>
            <div className="grid col-start-4 grid-flow-row ml-1 md:ml-2 -mt-92 md:mt-10 md:flex md:flex-row">
          <Link to="/checkout">
              <div className="flex flex-row items-center mt-3 ml-0">
                <div className="-ml-1 md:ml-0">
              <ShoppingCartIcon fontSize="large" />
                </div>
              <span className="items-counter header-option-l2 -ml-1 md:ml-0">{count}</span>
              </div>
          </Link>
            </div>
      </div>
      
      <div className="flex space-x-2 mt-12 -ml-2 md:mt-0 md:ml-3 md:place-content-even 3xl:ml-80 3xl:space-x-20 4xl:space-x-20 4xl:ml-96">
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-slate-200 text-xl">Hello</span>
          { isAuthUser ? <span className='text-slate-100 font-bold text-xl mt-0.5 md:text-2xl 3xl:text-3xl'>{username}</span> :
            
            <Link to='/signin'>
          <span className="text-slate-100 font-bold text-xl mt-0.5 md:text-2xl 3xl:text-3xl">SignIn</span>
          </Link>
          }
        </div>
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-slate-200 text-xl">Your</span>
          <span className="text-slate-100 font-bold text-xl mt-0.5 md:text-2xl 3xl:text-3xl">Orders</span>
        </div>
        <div className="flex flex-col md:place-content-evenly">
          <span className="text-slate-200 text-xl">Your</span>
          <span className="text-slate-100 font-bold text-xl mt-0.5 md:text-2xl 3xl:text-3xl">Subscription</span>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
