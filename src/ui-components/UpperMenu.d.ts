/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MenuMethodProps } from "./MenuMethod";
import { MenuTrialProps } from "./MenuTrial";
import { MenuRelatedInfoProps } from "./MenuRelatedInfo";
import { MenuProjectProps } from "./MenuProject";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type UpperMenuOverridesProps = {
    UpperMenu?: PrimitiveOverrideProps<ViewProps>;
    MenuMethod?: MenuMethodProps;
    MenuTrial?: MenuTrialProps;
    MenuRelatedInfo?: MenuRelatedInfoProps;
    MenuProject?: MenuProjectProps;
} & EscapeHatchProps;
export declare type UpperMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UpperMenuOverridesProps | undefined | null;
}>;
export default function UpperMenu(props: UpperMenuProps): React.ReactElement;
