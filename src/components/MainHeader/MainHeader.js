import React from "react";
import Media from "react-media";
import styled from "styled-components";

const mainHeader = () => (
  <Main>
    <Media queries={{ mobile: { maxWidth: 1000 } }}>
      {matches =>
        matches.mobile ? (
          <Wrapper>
            <section>
              <div>
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
                <p>
                  Our mission at <span>Solar Power New England</span>, is to
                  help homeowners increase their ability to produce their own
                  power, and improve their ability to manage their energy
                  consumption.
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
  background-color: rgb(231, 225, 225);
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

    @media (min-width: 600px) {
      font-size: 50px;
    }
  }
  div {
    font-size: 20px;
    @media (min-width: 600px) {
      padding: 25px;
    }
  }
  p {
    text-align: left;
  }
  span {
    font-weight: bold;
    font-family: "Orbitron", sans-serif;
    color: rgb(56, 124, 141);
  }
`;
