import { SideMenu } from "../ui-components";
import React from "react";
import { Amplify } from "aws-amplify";
import { slide as Menu } from 'react-burger-menu';

import awsmobile from '../aws-exports';

Amplify.configure({
  ...awsmobile,                               
  aws_appsync_authenticationType: "API_KEY",
});


export default function SideMenuComponent() {
  
  const SideMenuOverrides = {
    "SideMenu" : {
      height : "100%"
    },
    "SideMenu1" : {
      height : "30%"
    },
    "SideMenu2" : {
      height : "40%"
    },
    "SideMenu3" : {
      height : "30%"
    },
  }

  return (
    <Menu>
      <SideMenu overrides={SideMenuOverrides} />
    </Menu>
  )
};