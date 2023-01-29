import React from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-nowrap px-10 py-4">
        <div className="px-4">
          {" "}
          <Card />
        </div>
        <div className="px-4">
          {" "}
          <Card />
        </div>
        <div className="px-4">
          {" "}
          <Card />
        </div>
        <div className="px-4">
          {" "}
          <Card />
        </div>
      </div>
    </div>
  );
};
