import React from "react";

interface LV {
  value: number;
  lable: string;
}

const ButtonGrp = ({
  options,
  onChange,
  containerClass
}: {
  options: LV[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  containerClass?: string;
}) => {
  return (
    <select
      className={"bg-white border border-gray-400 px-3 py-2 rounded text-gray-600 font-semibold " + containerClass}
      onChange={onChange}
    >
      {options.map(({ value, lable }, i) => {
        return (
          <option key={"option__" + i} value={value}>
            {lable}
          </option>
        );
      })}
    </select>
  );
};

export default ButtonGrp;
