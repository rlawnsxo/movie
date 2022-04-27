import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  color: aliceblue;
  margin: 10px 10px 0;
  height: 30px;
  width: 30%;
  background: black;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  font-size: 15px;
  z-index: 2;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
