/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import SideMenu1 from "./SideMenu1";
import SideMenu2 from "./SideMenu2";
import SideMenu3 from "./SideMenu3";
import { Flex } from "@aws-amplify/ui-react";
export default function SideMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SideMenu")}
      {...rest}
    >
      <SideMenu1
        display="flex"
        gap="0"
        direction="column"
        width="200px"
        height="189px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideMenu1")}
      ></SideMenu1>
      <SideMenu2
        display="flex"
        gap="0"
        direction="column"
        width="200px"
        height="315px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideMenu2")}
      ></SideMenu2>
      <SideMenu3
        display="flex"
        gap="0"
        direction="column"
        width="200px"
        height="189px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideMenu3")}
      ></SideMenu3>
    </Flex>
  );
}
