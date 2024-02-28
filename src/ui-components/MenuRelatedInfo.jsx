/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MenuRelatedInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="210px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="4px 19px 4px 19px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MenuRelatedInfo")}
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
        children="関連情報照会"
        {...getOverrideProps(overrides, "\u95A2\u9023\u60C5\u5831\u7167\u4F1A")}
      ></Text>
    </Flex>
  );
}
