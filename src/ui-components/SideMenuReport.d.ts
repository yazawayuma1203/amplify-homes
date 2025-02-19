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
export declare type SideMenuReportOverridesProps = {
    SideMenuReport?: PrimitiveOverrideProps<FlexProps>;
    "\u30EC\u30DD\u30FC\u30C8\u4F5C\u6210"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuReportProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuReportOverridesProps | undefined | null;
}>;
export default function SideMenuReport(props: SideMenuReportProps): React.ReactElement;
