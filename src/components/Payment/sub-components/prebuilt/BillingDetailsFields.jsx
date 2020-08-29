import FormField from "./FormField";
import React from 'react';

const BillingDetailsFields = () => {
  return (
    <div style={{}}>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="your name"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="your email"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="your address"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="your city"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="your state"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="your zip"
        required
      />
    </div>
  );
};

export default BillingDetailsFields;
