/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MenuMethod from "./MenuMethod";
import MenuTrial from "./MenuTrial";
import MenuRelatedInfo from "./MenuRelatedInfo";
import MenuProject from "./MenuProject";
import { View } from "@aws-amplify/ui-react";
export default function UpperMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="840px"
      height="33px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UpperMenu")}
      {...rest}
    >
      <MenuMethod
        display="flex"
        gap="10px"
        direction="row"
        width="210px"
        height="33px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="25%"
        right="50%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="4px 19px 4px 19px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MenuMethod")}
      ></MenuMethod>
      <MenuTrial
        display="flex"
        gap="10px"
        direction="row"
        width="210px"
        height="33px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="50%"
        right="25%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="4px 19px 4px 19px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MenuTrial")}
      ></MenuTrial>
      <MenuRelatedInfo
        display="flex"
        gap="10px"
        direction="row"
        width="210px"
        height="33px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="75%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="4px 19px 4px 19px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MenuRelatedInfo")}
      ></MenuRelatedInfo>
      <MenuProject
        display="flex"
        gap="10px"
        direction="row"
        width="210px"
        height="33px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="75%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="4px 0px 4px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MenuProject")}
      ></MenuProject>
    </View>
  );
}
