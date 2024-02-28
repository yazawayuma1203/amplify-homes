import { HomeCreateForm } from "../ui-components";
import React from "react";


export default function HomeCreateFormPage() {

  const HomeOverrides = {
    "HomeCreateForm" : {
      margin: "50px 0px 0px 0px"
    },

    "address" : {
       margin: "50px 0px 0px 0px"
    },

    "SubmitButton" : {
      padding: "10px 10px 10px 10px"
    },
  };

  return (
    <HomeCreateForm overrides={HomeOverrides} />
  )
};