import { dividerClasses } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AddProductForm from './AddProductForm';
import './Admin.css';
import SideBtn from './btn/SideBtn';
import ProductsDashboard from './ProductsDashboard';

const Admin: FunctionComponent = () => {
  const [state, setState] = useState<string>('');

  return (
    <div className="flex grid-cols-3">
      <div className="pr-20">
        <h2 className="ml-20 text-3xl">Admin Panel</h2>
        <div className="flex flex-col">
          {state === 'addProduct' ? (
            <AddProductForm />
          ) : (
            <div className="flex flex-col justify-center items-center ml-8 my-3 mx-auto w-11/12">
              <button
                className=" justify-center items-center ml-10 my-0 w-fit transition ease-in-out delay-100"
                onClick={() => setState('addProduct')}
              >
                Add New Product
              </button>
            </div>
          )}

          {state === 'addNewPost' ? (
            <h1>hello</h1>
          ) : (
            
              <SideBtn
                onClick={() => setState('addNewPost')}
                text="Add New Post"
                className=" justify-center items-center ml-10 my-0 w-fit transition ease-in-out delay-100"
              />
  
          )}
        </div>
      </div>

      <div className="mt-0">
        <h2 className="ml-20 -mt-0.1 text-3xl">Products Overview</h2>
        <ProductsDashboard />
      </div>
    </div>
  );
};

export default Admin;
