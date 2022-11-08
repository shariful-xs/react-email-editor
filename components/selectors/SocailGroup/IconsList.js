import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeIcon } from "../../../rtk/features/socialIcons/listContainerSlice";
import { addIcon } from "../../../rtk/features/socialIcons/socialIconsSlice";

import SocailURLCard from "./SocailURLCard";

const IconsList = () => {
  // using redux
  const dispatch = useDispatch();
  const items = useSelector((state) => state.listContainer.iconsList);

  //  =====Handle Items and Card Group=======//
  const handleIcon = (item) => {
    //remove icon from list
    dispatch(removeIcon(item));
    // add to card
    dispatch(addIcon(item));
  };

  return (
    <div>
      <SocailURLCard />
      <div>
        {items.length > 0 && <p>Click the icons to add</p>}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {items.map((item) => (
            <div key={item._id}>
              {
                <item.icon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIcon(item)}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconsList;
