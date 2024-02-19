/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import SideMenuMainte from "./SideMenuMainte";
import SideMenuReport from "./SideMenuReport";
import SideMenuKuhaku from "./SideMenuKuhaku";
import { Flex } from "@aws-amplify/ui-react";
export default function SideMenu3(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="200px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SideMenu3")}
      {...rest}
    >
      <SideMenuMainte
        display="flex"
        gap="10px"
        direction="row"
        width="200px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="20px 20px 20px 20px"
        {...getOverrideProps(overrides, "SideMenuMainte")}
      ></SideMenuMainte>
      <SideMenuReport
        display="flex"
        gap="10px"
        direction="row"
        width="200px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="20px 20px 20px 20px"
        {...getOverrideProps(overrides, "SideMenuReport")}
      ></SideMenuReport>
      <SideMenuKuhaku
        display="flex"
        gap="10px"
        direction="row"
        width="200px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="20px 20px 20px 20px"
        {...getOverrideProps(overrides, "SideMenuKuhaku")}
      ></SideMenuKuhaku>
    </Flex>
  );
}
