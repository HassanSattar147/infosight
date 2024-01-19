import React, { CSSProperties } from "react";

const Button = ({
  text,
  onClick,
  variant = "black",
  style,
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "black" | "orange";
  style?: CSSProperties;
}) => {
  const btnColors =
    variant === "orange"
      ? "bg-[#EC6A30] hover:bg-[#d8622c]"
      : "bg-[#000000] hover:bg-[#222]";

  return (
    <button
      className={"px-5 py-2 text-white rounded-md " + btnColors}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
