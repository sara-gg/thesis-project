import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box } from "grommet";

const SkeletonCard = (duration) => {
  return (
    <Box>
      <ul className="list">
        {Array(6)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Box className="card-image">
                <Skeleton height={360} width={500} />
              </Box>
              <h4>
                <Skeleton width={`70%`} height={36} />
              </h4>

              <p>
                <Skeleton width={`50%`} />
              </p>
            </li>
          ))}
      </ul>
    </Box>
  );
};
export default SkeletonCard;
