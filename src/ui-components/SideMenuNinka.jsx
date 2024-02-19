/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SideMenuNinka(props) {
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
      {...getOverrideProps(overrides, "SideMenuNinka")}
      {...rest}
    >
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.167999267578125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="クレジット認可申請"
        {...getOverrideProps(
          overrides,
          "\u30AF\u30EC\u30B8\u30C3\u30C8\u8A8D\u53EF\u7533\u8ACB"
        )}
      ></Text>
    </Flex>
  );
}
