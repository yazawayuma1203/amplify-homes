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
export declare type SideMenuShinseiOverridesProps = {
    SideMenuShinsei?: PrimitiveOverrideProps<FlexProps>;
    "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7533\u8ACB"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuShinseiProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuShinseiOverridesProps | undefined | null;
}>;
export default function SideMenuShinsei(props: SideMenuShinseiProps): React.ReactElement;
