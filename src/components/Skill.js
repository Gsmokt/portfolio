import React from "react";
import { List } from "../styles/skills";

const Skill = ({ item }) => {
  return (
    <List>
      <img
        width={220}
        height={220}
        src={require(`../assets/images/${item}.png`)}
        alt={item}
      />
      <h2>{item}</h2>
    </List>
  );
};

export default Skill;
