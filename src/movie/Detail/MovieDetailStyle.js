import styled from "styled-components";

export const NainImg = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${(props) => props.img});
    background-size: cover;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
