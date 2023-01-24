import React, { useState } from "react";

export interface ITextField {
  label: string;
};

const TextFieldWithState: React.FC<ITextField> = ({ label }) => {

  const [value, setValue] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div data-textfield="textField_id">
      <label htmlFor="">{label}</label>
      <input type="text" value={value} onChange={handleOnChange} />
    </div>
  );
};

export default TextFieldWithState;
