import React from "react";
import styles from "~/styles/button.css";

const Button = ({ color, borderColor, textColor, children, width }) => {
  return (
    <button
      className={styles.button}
      style={{
        color: textColor,
        background: color,
        border: "1px solid " + borderColor,
        borderRadius: "4px",
        textAlign: "center",
        width: width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
