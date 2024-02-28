/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuMethodOverridesProps = {
    MenuMethod?: PrimitiveOverrideProps<FlexProps>;
    "\u65B9\u6CD5\u8AD6/\u4F01\u696D\u30DE\u30C3\u30C1\u30F3\u30B0"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuMethodProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuMethodOverridesProps | undefined | null;
}>;
export default function MenuMethod(props: MenuMethodProps): React.ReactElement;
