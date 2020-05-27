import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 180px;
  border: 1px solid black;
  text-align: center;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: blue;
`;

export const Body = styled.div`
  width: 100%;
  height: 140px;
  overflow-y: scroll;
  background-color: #cfcfcf;
  padding: 5px;
  box-sizing: border-box;
`;

export const AddButton = styled.div`
  height: 20px;
  width: 100%;
  margin: 5px 0;
  border: 1px solid black;
  background-color: #fff;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 100%;
  margin: 5px 0;
  text-align: center;
  border: 1px solid black;
  background-color: #fff;
`;
