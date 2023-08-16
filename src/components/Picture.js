import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div><p>{data.photographer}</p>
      <p>
      </p>
    </div>
  );
};

export default Picture;
