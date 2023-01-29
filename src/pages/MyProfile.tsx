import React from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const MyProfile = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Sidebar />
      </div>
      <div className="container pl-64">
        <div className="pl-8">
           <Form/>
        </div>
      </div>
    </div>
  );
};
