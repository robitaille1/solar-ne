import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
// import Dummy from "dummyjs";
import {
  gorham,
  gorham2,
  gorham3,
  gorham4,
  portland,
  portland2,
} from "../../assets/our-work";

let items = [
  { id: 1, src: gorham, alt: "Gorham Project" },
  { id: 2, src: gorham2, alt: "Gorham Project" },
  { id: 3, src: gorham3, alt: "Gorham Project" },
  { id: 4, src: gorham4, alt: "Gorham Project" },
  { id: 5, src: portland, alt: "Portland Project" },
  { id: 5, src: portland2, alt: "Portland Project" },
];

items = items.map(function (item) {
  return (
    <div key={item.id}>
      <img src={item.src} alt={item.alt} style={{ width: "100%" }} />
    </div>
  );
});

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const workSection = () => (
  <>
    <h2>We're extremely proud of our work!</h2>
    <p style={{ textAlign: "center" }}>
      From projects big to small, we love helping our neighbors become energy
      independent!
    </p>
    <Test>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </Test>
  </>
);

export default workSection;

const Test = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;
