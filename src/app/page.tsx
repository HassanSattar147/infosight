"use client";
import React from "react";
import HomePage from "../components/HomePage";

export default function Home() {
  const [isActive, setIsActive] = React.useState(false);

  const toggleActive = () => {
    setIsActive((prev: boolean) => !prev);
  };
  return (
    <div>
      <HomePage />
    </div>
  );
}
