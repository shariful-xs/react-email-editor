import React,{useState} from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const ImgtoolSetting = (props) => {

  const {setPicture} = props;
  
  const handleImageChanger = e =>{
    const file = e.target.files[0];
    const newImg = URL.createObjectURL(file);
    setPicture(newImg);
  }
 
  return (
    <React.Fragment>
      <ToolbarSection title="Upload"
      >
      <input onChange = {handleImageChanger} className="border border-1 w-full block  mt-2" type="file" />
      </ToolbarSection>
    </React.Fragment>
  );
};
