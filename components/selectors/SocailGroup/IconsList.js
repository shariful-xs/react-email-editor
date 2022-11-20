import React, { useState, useEffect } from "react";
import { urlValidate } from "../../../helpers/validation";
import { useNode } from "@craftjs/core";
import SocailURLCard from "./SocailURLCard";

const IconsList = () => {
  const [items, setItems] = useState([
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "Facebook",
      icon: "https://i.ibb.co/56Wg7v0/icons8-facebook-35.png",
      url: "https://www.facebook.com/",
      message: "",
    },
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "Twiter",
      icon: "https://i.ibb.co/0V9wCBC/icons8-twitter-35.png",
      url: "https://twitter.com/login",
      message: "",
    },
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "YoutTube",
      icon: "https://i.ibb.co/7jpgKfq/icons8-youtube-35.png",
      url: "",
      message: "",
    },
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "Instagram",
      icon: "https://i.ibb.co/yRYfzD0/icons8-instagram-35.png",
      url: "",
      message: "",
    },
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "Whats App",
      icon: "https://i.ibb.co/4NrvZ48/icons8-whatsapp-35.png",
      url: "",
      message: "",
    },
    {
      _id: `${Date.now() + Math.random() * 99}`,
      name: "Web Site",
      icon: "https://i.ibb.co/B3qDJkB/icons8-website-35.png",
      url: "",
      message: "",
    },
  ]);
  const [cardGroup, setCardGroup] = useState([]);
  const {
    actions: { setProp },
  } = useNode();

  useEffect(() => {
    setProp((props) => (props.socailIconList = cardGroup));
  }, [cardGroup]);

  //  =====Handle Items =======//
  const handleItem = (newItem) => {
    // item add in Card
    setCardGroup((prevCards) => [...prevCards, newItem]);
    // remove item from list
    const restItems = items.filter((item) => item._id !== newItem._id);
    setItems(restItems);
  };
  //  =====Handle  Card Group=======//
  const handleCardGroup = (item) => {
    // add item in list
    setItems((prevItems) => [...prevItems, item]);
    // remove item from card group
    const restCards = cardGroup.filter((card) => card._id !== item._id);
    setCardGroup(restCards);
  };
  // =======Handle Input Field =========== //
  const handleInputField = (event, index) => {
    const { value } = event.target;
    //deeply copy of cardGroup
    const deepCardGroupCopy = JSON.parse(JSON.stringify(cardGroup));
    // validation input field value
    if (!value) {
      deepCardGroupCopy[index].message = "";
      deepCardGroupCopy[index].url = value;
      setCardGroup(deepCardGroupCopy);
    } else if (!urlValidate(value)) {
      deepCardGroupCopy[index].message = "Please provide a valid url";
      deepCardGroupCopy[index].url = value;
      setCardGroup(deepCardGroupCopy);
    } else {
      deepCardGroupCopy[index].message = "";
      deepCardGroupCopy[index].url = value;
      setCardGroup(deepCardGroupCopy);
    }
  };

  return (
    <div>
      <SocailURLCard
        cardGroup={cardGroup}
        handleCardGroup={handleCardGroup}
        handleInputField={handleInputField}
      />
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
              <img
                style={{
                  width: "30px",
                  cursor: "pointer",
                }}
                onClick={() => handleItem(item)}
                src={item?.icon}
                alt={item?.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconsList;
