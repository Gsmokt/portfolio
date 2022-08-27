import React from "react";
import Card from "./Card";
import { projectList } from "../utils/index";

const CardList = () => {
  const Cards = projectList.map((item) => {
    return (
      <Card
        key={item.title}
        img={item.img}
        title={item.title}
        view={item.view}
        source={item.source}
      />
    );
  });

  return Cards;
};

export default CardList;
