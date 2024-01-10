import React, { CSSProperties } from "react";

const Button = ({
  text,
  style,
  onClick,
}: {
  text: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="bg-[#EC6A30] hover:bg-[#d8622c] px-5 py-2 text-white rounded-md"
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
