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
export declare type SideMenuMonitaOverridesProps = {
    SideMenuMonita?: PrimitiveOverrideProps<FlexProps>;
    "\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuMonitaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuMonitaOverridesProps | undefined | null;
}>;
export default function SideMenuMonita(props: SideMenuMonitaProps): React.ReactElement;
