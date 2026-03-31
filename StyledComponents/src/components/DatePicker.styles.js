import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 250px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #8c00ff;
  background: #111;
  color: #fff;
  cursor: pointer;
`;

export const Calendar = styled.div`
  position: absolute;
  top: 45px;
  width: 100%;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ccc;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const Day = styled.div`
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  background: ${({ selected }) =>
    selected ? "#7c3aed" : "transparent"};

  &:hover {
    background: #7c3aed;
  }
`;