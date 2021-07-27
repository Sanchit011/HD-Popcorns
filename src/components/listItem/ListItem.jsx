import React from "react";
import "./listItem.scss";
import {
  Add,
  PlayCircleFilledWhite,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayCircleFilledWhite />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 40 min</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          akdsnadn sdfafda sfda ssdfa sd asfd asfd asd ad asd as da d ad asd sad
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
