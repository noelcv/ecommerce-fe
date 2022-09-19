import { dividerClasses } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AddProductForm from './AddProductForm';
import SideBtn from './btn/SideBtn';
import ProductsDashboard from './ProductsDashboard';

const Admin: FunctionComponent = () => {
  const [state, setState] = useState<string>('');

  return (
    <div className="grid-cols-3 md:flex">
      <div className="md:pr-20">
        <h2 className="ml-5 md:ml-20 md:text-3xl">Admin Panel</h2>
        <div className="flex flex-row justify-start md:flex-col">
        
            <SideBtn
                onClick={() => setState('myProducts')}
                text="My Products"
                className="antialiased text-sm md:text-lg -ml-16 md:ml-10 my-0 w-fit transition ease-in-out delay-100 drop-shadow-xl"
              />
            
              <SideBtn
                onClick={() => setState('addNewPost')}
                text="Add New Post"
                className="antialiased text-sm md:text-lg -ml-40 md:ml-10 my-0 w-fit transition ease-in-out delay-100 drop-shadow-xl"
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
