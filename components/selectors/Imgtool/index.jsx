import { useNode, useEditor } from '@craftjs/core';
import React,{useState} from 'react';

import { ImgtoolSetting } from './ImgtoolSetting';
let testPic ;

export const ImgTool = (props) => {

    const [picture,setPicture] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEiCtXDj2Lodd9Nh_Q5MDUTNE7LL1rBdY0ytlKW3KCA&s")

    testPic = setPicture


  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

 

  return (
    <div style={{
      width:"100%"
    }} ref={connect} enabled={enabled}>
      <div style={{
      backgroundImage: `url(${picture})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      width:"100%",
      height:"200px"
      }}>
      </div>
    </div>
  );
};

ImgTool.craft = {
  displayName:'Image Control',
  related: {
  toolbar:()=>{
    return <ImgtoolSetting  setPicture={testPic}/>
  },
  },
};
