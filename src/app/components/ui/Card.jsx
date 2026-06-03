"use client";
import React from "react";

const Card = React.forwardRef(function Card(
  { as: Component = "div", className = "", children, ...props },
  ref,
) {
  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  );
});

Card.displayName = "Card";

export default Card;
