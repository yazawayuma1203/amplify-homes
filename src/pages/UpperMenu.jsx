
import React from "react";

import { UpperMenu } from "../ui-components";

export default function UpperMenuComponent() {
  
  const UpperMenuOverrides = {
    "UpperMenu" : {
      width : "100%",
      margin : "0px 0px 0px 0px",
      position : "fixed",
    },
    "MenuProject" : {
      width : "25%"
    },
    "MenuMethod" : {
      width : "25%"
    },
    "MenuTrial" : {
      width : "25%"
    },
    "MenuRelatedInfo" : {
      width : "25%"
    },
  }

  return (
      <UpperMenu overrides={UpperMenuOverrides} />
  )
};