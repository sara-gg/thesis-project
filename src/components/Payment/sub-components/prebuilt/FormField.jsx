import styled from "@emotion/styled";
import React from 'react';

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #cfceca;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #444444;
  overflow: hidden;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 0px solid #444444;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #444444;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: #B0BCC8;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
