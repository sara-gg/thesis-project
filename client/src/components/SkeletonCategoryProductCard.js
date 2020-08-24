import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box, Button, Image, Text } from "grommet";

const SkeletonCard = (duration) => {
  // <Box
  //     //height="medium"
  //     width="500px"
  //     //elevation="medium"
  //     margin="medium"
  //     pad="medium"
  //     hoverIndicator="true"
  //     round="small"
  //     onClick={() => {
  //       history.push({
  //         pathname: "/productdetails",
  //         search: `?id=${product.id}`,
  //       });
  //     }}
  //   >
  //     {<Image
  //       fit="cover"
  //       height="360px"
  //       fill="horizontal"
  //       src={`${product.images}`}
  //     />}

  //     <Box pad="2% 0 0 0" direction="column">
  //       <Box direction="row" flex justify="between">
  //         <Text>
  //           <span className="product-title">{product.title} </span>(
  //           {product.quantity})
  //         </Text>
  //         {<Text>{product.price} €</Text>}
  //       </Box>
  //       <Text size="small">
  //         seller <Location /> {product.location}
  //       </Text>
  //     </Box>
  //   </Box>
  return (
    <Box>
      {/* <h2 className="section-title">
          <Skeleton height={30} width={300} />
        </h2> */}

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
