import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import React from "react";
import { Button } from "./Button";

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 2rem;
  h1 {
    margin-bottom: 3rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      margin-top: 2.5rem;
    }
  }
  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5.5rem 2rem 0rem 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 962px) {
      margin-top: 2.5rem;
    }
  }
  p {
    margin: 1.5rem 0;
  }
`;

const NewHouse = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  image2,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <img src={image} alt="home" />
          <p>{paragraphOne}</p>
          <Button
            to="/homes"
            primary="false"
            css={`
              max-width: 160px;
            `}
          >
            {buttonLabel} <Arrow />
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <img src={image2} alt="home" />
          <p>{paragraphTwo}</p>
          <Button
            to="/homes"
            primary="true"
            css={`
              max-width: 160px;
            `}
          >
            {buttonLabel} <Arrow />
          </Button>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default NewHouse;
