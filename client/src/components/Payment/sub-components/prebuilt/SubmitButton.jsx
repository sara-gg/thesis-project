import styled from "@emotion/styled";

const SubmitButton = styled.button`
  display: block;
  height: 50px;
  width: 60%;
  font-size: inherit;
  background-color: ${props => (props.disabled ? "#E1BE86" : "#E1BE86")};
  border: 4px;
  border-radius: 100px;
  color: #ffff;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default SubmitButton;
