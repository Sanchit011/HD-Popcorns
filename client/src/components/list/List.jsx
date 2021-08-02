import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
  const [slideNumber, setslideNumber] = useState(0);
  const [isMoved, setisMoved] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    setisMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    } else if (direction === "right" && slideNumber < 5) {
      setslideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          <ListItem index = {0}/>
          <ListItem index = {1}/>
          <ListItem index = {2}/>
          <ListItem index = {3}/>
          <ListItem index = {4}/>
          <ListItem index = {5}/>
          <ListItem index = {6}/>
          <ListItem index = {7}/>
          <ListItem index = {8}/>
          <ListItem index = {9}/>
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
