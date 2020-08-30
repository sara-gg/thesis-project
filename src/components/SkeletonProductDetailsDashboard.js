import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box,  } from "grommet";

const SkeletonProductDetailsDashboard = (duration) => {
  return (
    <div className="product-detail-card">
      <Box className="product-detail-card-image">
        <Skeleton height={700} width={700} />
      </Box>
      <div className="product-detail-card-text">
        <h4>
          <Skeleton width={350} height={36} />
        </h4>
        <p>
          <Skeleton width={70} height={16} />
        </p>
        <p className="product-detail-card-p">
          <Skeleton count={3} width={100} />
        </p>
        <p className="product-detail-card-p">
          <Skeleton count={3} width={100} />
        </p>
        <h4 className="product-detail-card-button">
          <Skeleton width={350} height={56} />
        </h4>
        <h4>
          <Skeleton width={350} height={56} />
        </h4>
        <p className="product-detail-card-p">
          <Skeleton count={3} width={100} />
        </p>
        <p className="product-detail-card-p">
          <Skeleton count={3} width={100} />
        </p>
      </div>
    </div>
  );
};
export default SkeletonProductDetailsDashboard;
