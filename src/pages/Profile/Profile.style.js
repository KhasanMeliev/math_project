import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  width: 300px;
  height: 290px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
`;

export const Texts = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: 25px;
  }
  img {
    width: 100px;
    border-radius: 50%;
    margin-top: -65px;
  }
`;
export const Tests = styled.div`
  width: 100%;
  height: 50%;

  p {
    font-size: 25px;
    text-align: center;
    font-weight: 450;
  }
`;
