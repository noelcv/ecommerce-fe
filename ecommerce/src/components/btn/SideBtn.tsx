import React, { FunctionComponent } from 'react'
import { ButtonPropsType } from '../../types/ButtonPropsType';


const SideBtn: FunctionComponent<ButtonPropsType> = ({onClick, className, text}:ButtonPropsType) => {
    
  return (
  
    <div className="flex flex-col justify-center items-center ml-8 my-3 mx-auto w-11/12">
      <button 
      onClick={onClick}
      className={className}
      >
        {text}
      </button>
    </div>
  );
};



export default SideBtn