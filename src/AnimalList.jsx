import PropTypes from "prop-types";
import { useState } from "react";

import "./AnimalList.css";

import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};

function AnimalList({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

AnimalList.propTypes = {
  type: PropTypes.string.isRequired
};

export default AnimalList;
