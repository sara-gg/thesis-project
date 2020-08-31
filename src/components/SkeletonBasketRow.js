import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box } from "grommet";

const SkeletonBasketRow = (duration) => {
  return (
    <div className="basket-list">
      <div className="basket-card">
        <Box>
          <Skeleton height={160} width={160} />
        </Box>
        <div className="basket-card-title">
          <p>
            <Skeleton width={350} height={26} />
          </p>
          <p>
            <Skeleton width={250} height={16} />
          </p>
        </div>

        <p className="basket-card-text">
          <Skeleton width={40} height={16} />
        </p>
        <p className="basket-card-text">
          <Skeleton width={40} height={16} />
        </p>
      </div>
      <div className="basket-card">
        <Box>
          <Skeleton height={160} width={160} />
        </Box>

        <div className="basket-card-title">
          <p>
            <Skeleton width={350} height={26} />
          </p>
          <p>
            <Skeleton width={250} height={16} />
          </p>
        </div>
        <p className="basket-card-text">
          <Skeleton width={40} height={16} />
        </p>
        <p className="basket-card-text">
          <Skeleton width={40} height={16} />
        </p>
      </div>
    </div>
  );
};
export default SkeletonBasketRow;
