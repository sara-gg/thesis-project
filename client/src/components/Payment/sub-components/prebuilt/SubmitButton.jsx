import styled from "@emotion/styled";

const SubmitButton = styled.button`
  display: block;
  height: 50px;
  width: 60%;
  font-size: inherit;
  background-color: ${props => (props.disabled ? "#7795f8" : "#E1BE86")};
  border: 4px;
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export default SubmitButton;
