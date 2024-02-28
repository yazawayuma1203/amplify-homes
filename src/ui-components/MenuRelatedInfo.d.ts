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
export declare type MenuRelatedInfoOverridesProps = {
    MenuRelatedInfo?: PrimitiveOverrideProps<FlexProps>;
    "\u95A2\u9023\u60C5\u5831\u7167\u4F1A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuRelatedInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuRelatedInfoOverridesProps | undefined | null;
}>;
export default function MenuRelatedInfo(props: MenuRelatedInfoProps): React.ReactElement;
