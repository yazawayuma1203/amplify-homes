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
export declare type SideMenuMainteOverridesProps = {
    SideMenuMainte?: PrimitiveOverrideProps<FlexProps>;
    "\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuMainteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuMainteOverridesProps | undefined | null;
}>;
export default function SideMenuMainte(props: SideMenuMainteProps): React.ReactElement;
