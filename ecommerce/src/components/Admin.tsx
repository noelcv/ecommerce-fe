import { dividerClasses } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AddProductForm from './AddProductForm';
import SideBtn from './btn/SideBtn';
import ProductsDashboard from './ProductsDashboard';

const Admin: FunctionComponent = () => {
  const [state, setState] = useState<string>('');

  return (
    <div className="grid-cols-3 md:flex">
      <div className="pr-20">
        <h2 className="ml-20 text-3xl">Admin Panel</h2>
        <div className="flex flex-row md:flex-col">
        
            <SideBtn
                onClick={() => setState('myProducts')}
                text="My Products"
                className=" justify-center antialiased text-lg items-center ml-10 my-0 w-fit transition ease-in-out delay-100 drop-shadow-xl"
              />
            
              <SideBtn
                onClick={() => setState('addNewPost')}
                text="Add New Post"
                className=" justify-center antialiased text-lg items-center ml-10 my-0 w-fit transition ease-in-out delay-100 drop-shadow-xl"
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
