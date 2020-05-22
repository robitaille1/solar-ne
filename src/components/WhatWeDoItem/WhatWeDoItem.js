import React from "react";
import Media from "react-media";
import styled from "styled-components";
import { Fade } from "react-reveal";

const whatWeDoItem = props => (
  <Media queries={{ mobile: { maxWidth: 1250 } }}>
    {matches =>
      matches.mobile ? (
        <Wrapper>
          <Fade duration={2000}>
            <div>
              <img src={props.item.img} alt={props.item.credit} />

              <div>
                <h3>{props.item.title}</h3>
                {props.item.description === "" ? null : (
                  <p>{props.item.description}</p>
                )}
              </div>
            </div>
          </Fade>
        </Wrapper>
      ) : (
        <Wrapper>
          {props.item.id % 2 === 0 ? (
            <div>
              <img src={props.item.img} alt={props.item.credit} />

              <Fade right duration={1500}>
                <div>
                  <h3>{props.item.title}</h3>
                  {props.item.description === "" ? null : (
                    <p>{props.item.description}</p>
                  )}
                </div>
              </Fade>
            </div>
          ) : (
            <div>
              <Fade left duration={1500}>
                <div>
                  <h3>{props.item.title}</h3>
                  {props.item.description === "" ? null : (
                    <p>{props.item.description}</p>
                  )}
                </div>
              </Fade>

              <img src={props.item.img} alt={props.item.credit} />
            </div>
          )}
        </Wrapper>
      )
    }
  </Media>
);

export default whatWeDoItem;

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 15%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  max-width: 1400px;
  @media (min-width: 1250px) {
    /* height: 537px; */
    padding: 50px 10%;
    margin-top: 50px;
  }
  @media (min-width: 1400px) {
    padding: 50px 1%;
    margin: 0 auto;
  }
  div {
    display: block;
    justify-content: space-between;
    @media (min-width: 1250px) {
      display: flex;
      justify-content: space-around;
    }
    div {
      font-size: 16px;
      align-self: center;
      @media (min-width: 700px) {
        font-size: 15px;
      }
      @media (min-width: 1250px) {
        font-size: 20px;
        width: 40%;
        margin: 0px;
        text-align: left;
        display: block;
      }
    }
  }

  img {
    width: 80%;
    margin-bottom: 10px;
    @media (min-width: 700px) {
      width: 35%;
    }
  }
  h3 {
    font-size: 20px;
    align-self: center;

    @media (min-width: 700px) {
      font-size: 25px;
    }
    @media (min-width: 1250px) {
      font-size: 30px;
    }
  }
`;
