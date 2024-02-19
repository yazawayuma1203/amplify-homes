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
export declare type SideMenuNinkaOverridesProps = {
    SideMenuNinka?: PrimitiveOverrideProps<FlexProps>;
    "\u30AF\u30EC\u30B8\u30C3\u30C8\u8A8D\u53EF\u7533\u8ACB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuNinkaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuNinkaOverridesProps | undefined | null;
}>;
export default function SideMenuNinka(props: SideMenuNinkaProps): React.ReactElement;
