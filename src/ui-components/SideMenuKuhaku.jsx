/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function SideMenuKuhaku(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="210px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="20px 20px 20px 20px"
      {...getOverrideProps(overrides, "SideMenuKuhaku")}
      {...rest}
    ></Flex>
  );
}
