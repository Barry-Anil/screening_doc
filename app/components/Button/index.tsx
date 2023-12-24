import React from "react";
import  styles from "./index.module.css";
const Button = ({
  fill = "outline",
  extraStyles,
  text,
}: {
  fill?: string;
  extraStyles: React.CSSProperties;
  text: string;
}) => {
  const textStyle = fill === "outline" ? "text-blue" : "text-white";
  const background =
    fill === "outline" ? "white-background" : "blue-background";
  return (
    <div>
      <button
        className={`${styles.btn} ${textStyle} ${background}`}
        style={extraStyles}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;