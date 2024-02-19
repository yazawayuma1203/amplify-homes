/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SideMenu1Props } from "./SideMenu1";
import { SideMenu2Props } from "./SideMenu2";
import { SideMenu3Props } from "./SideMenu3";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type SideMenuOverridesProps = {
    SideMenu?: PrimitiveOverrideProps<FlexProps>;
    SideMenu1?: SideMenu1Props;
    SideMenu2?: SideMenu2Props;
    SideMenu3?: SideMenu3Props;
} & EscapeHatchProps;
export declare type SideMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuOverridesProps | undefined | null;
}>;
export default function SideMenu(props: SideMenuProps): React.ReactElement;
