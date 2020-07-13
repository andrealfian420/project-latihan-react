import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "blue", "pink", "yellow", "green", "black", "orange"];

  const randomColor = colors[Math.round(Math.random() * colors.length)];

  const className = `${randomColor}-text`;

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
