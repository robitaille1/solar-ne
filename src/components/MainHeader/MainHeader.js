import React from "react";
import Media from "react-media";
import styled from "styled-components";

const mainHeader = () => (
  <Main name="mainheader">
    <Media queries={{ mobile: { maxWidth: 1000 } }}>
      {(matches) =>
        matches.mobile ? (
          <Wrapper>
            <section>
              <div>
                <h2>Our Mission</h2>
                <p>
                  <span>Solar Power New England</span> aims to help homeowners
                  increase their ability to produce their own power, and improve
                  their ability to manage their energy consumption.
                </p>
                <p>
                  Our focus is to help the people of Maine and their neighbors,
                  in the transition to a renewable and sustainable energy
                  future.
                </p>
              </div>
            </section>
          </Wrapper>
        ) : (
          <Wrapper>
            <section>
              <div>
                <h2>Our Mission</h2>
                <p>
                  At <span>Solar Power New England</span> our mission is to help
                  homeowners increase their ability to produce their own power,
                  and improve their ability to manage their energy consumption.
                </p>
                <p>
                  Our focus, to help the people of Maine and their neighbors, in
                  the transition to a renewable and sustainable energy future.
                </p>
                <p>
                  Invest in your home, community, local business and
                  congratulations on taking your first step toward energy
                  independence!
                </p>
              </div>
            </section>
          </Wrapper>
        )
      }
    </Media>
  </Main>
);

export default mainHeader;

const Main = styled.main`
  padding: 30px 10px;
  background-color: #fcfbfb;
`;

const Wrapper = styled.div`
  margin: 0 10px;
  @media (min-width: 600px) {
    margin: 0 10%;
  }
  section {
    text-align: center;
    margin: 0px;
    font-size: 35px;
    max-width: 1400px;

    @media (min-width: 600px) {
      font-size: 50px;
      margin: 0 auto;
    }
  }
  div {
    font-size: 20px;
  }
  p {
    text-align: left;
  }
  span {
    font-weight: bold;
    font-family: "Orbitron", sans-serif;
    color: #275e1a;
  }
`;
