import React from "react";
import style from "./SocailURLCard.module.css";
import { BiMenu, BiTrash } from "react-icons/bi";
const SocailURLCard = ({ cardGroup, handleCardGroup, handleInputField }) => {
  return (
    <div>
      {cardGroup?.length > 0 && <p>Socail Link</p>}
      {cardGroup?.map((card, index) => {
        return (
          <div className={style.socailCard} key={card?._id}>
            <div className={`flex items-center ${style.cardHeader}`}>
              <BiMenu />
              <img
                className={`${style.iconSize}`}
                src={card?.icon && card.icon}
                alt=""
              />
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
            {card?.message && (
              <p className={`${style.errorMsg}`}>{card.message}</p>
            )}
            <div className="flex justify-end">
              <BiTrash
                className={`${style.trash}`}
                onClick={() => handleCardGroup(card)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocailURLCard;
