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
export declare type MenuTrialOverridesProps = {
    MenuTrial?: PrimitiveOverrideProps<FlexProps>;
    "\u8A66\u7B97"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuTrialProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuTrialOverridesProps | undefined | null;
}>;
export default function MenuTrial(props: MenuTrialProps): React.ReactElement;
