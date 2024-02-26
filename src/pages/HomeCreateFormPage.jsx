import { HomeCreateForm } from "../ui-components";
import React from "react";


export default function HomeCreateFormPage() {

  const HomeOverrides = {
    "SubmitButton" : {
      padding: "10px 10px 10px 10px"
    },
  };

  return (
    <HomeCreateForm overrides={HomeOverrides} />
  )
};