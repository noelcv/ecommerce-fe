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
        
            <SideBtn
                onClick={() => setState('myProducts')}
                text="My Products"
                className=" justify-center antialiased text-lg items-center ml-10 my-0 w-fit transition ease-in-out delay-100"
              />
            
              <SideBtn
                onClick={() => setState('addNewPost')}
                text="Add New Post"
                className=" justify-center antialiased text-lg items-center ml-10 my-0 w-fit transition ease-in-out delay-100"
              />
  

        </div>
      </div>

      <div className="mt">
        {(() => {
          switch (state) {
            case "myProducts":
              return (
                <ProductsDashboard />
              )
            case "myPosts":
              return (
                <div>My Journal</div>
              )
          }
          
        })()}
       
      </div>
    </div>
  );
};

export default Admin;
