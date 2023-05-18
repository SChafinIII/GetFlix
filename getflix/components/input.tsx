import React from "react";
interface InputProps {
    id: string;
    label: string;
    onChange: any,
    type?: string;
    value: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    type,
    label,
    value,
}) => {
    return (
        <div className="relative">
          <input
            id={id}
            type={type || 'text'}
            // type={type ? type : 'text'}
            onChange={onChange}
            value={value}
            className=""
            placeholder=""
          />
          <label className="" htmlFor={id}>
            {label}
          </label>
        </div>
      );
}\
export default Input;