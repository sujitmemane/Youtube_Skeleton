import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonYoutubeCard = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="thumbnail" />
      <div className="card-info">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonYoutubeCard;
