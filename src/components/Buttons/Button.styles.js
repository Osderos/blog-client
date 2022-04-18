import styled from "styled-components";

const DefaultButton = styled.button`
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  margin: 10px;
  min-width: max-content;
`;

export const VisitPostButton = styled(DefaultButton)`
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: darkorange;
  }
`;
