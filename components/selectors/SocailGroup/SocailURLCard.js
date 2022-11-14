import React from "react";
import style from "./SocailURLCard.module.css";
import { BiMenu } from "react-icons/bi";
// import { BsFacebook, BsTwitter } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { addIcon } from "../../../rtk/features/socialIcons/listContainerSlice";
import {
  removeCard,
  updateInputField,
} from "../../../rtk/features/socialIcons/socialIconsSlice";
const SocailURLCard = () => {
  const dispatch = useDispatch();
  const cardGroup = useSelector((state) => state.socialIcons.items);

  const handleRmvCard = (card) => {
    // add again list
    dispatch(addIcon(card));
    // remove from card
    dispatch(removeCard(card));
  };
  // =======Handle Input Field =========== //
  const handleInputField = (event, index) => {
    const { value } = event.target;
    dispatch(updateInputField({ value, index }));
  };

  return (
    <>
      {cardGroup.length > 0 && <p>Socail Link</p>}
      {cardGroup?.map((card, index) => {
        return (
          <div className={style.socailCard} key={card?._id}>
            <div className={`flex items-center ${style.cardHeader}`}>
              <BiMenu />
              {card?.icon && <card.icon />}
              <p className="mb-0">{card.name}</p>
            </div>
            <div className={`${style.inputControl}`}>
              <p className="pb-0">URL</p>
              <input
                name={`${card?.name}`}
                value={card?.url}
                onChange={(event) => handleInputField(event, index)}
                className="border border-1"
                type="text"
              />
            </div>
            <div className="flex justify-end">
              <p className={style.delete} onClick={() => handleRmvCard(card)}>
                Delete
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SocailURLCard;
