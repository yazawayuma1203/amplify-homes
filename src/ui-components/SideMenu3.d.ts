/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SideMenuMainteProps } from "./SideMenuMainte";
import { SideMenuReportProps } from "./SideMenuReport";
import { SideMenuKuhakuProps } from "./SideMenuKuhaku";
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
export declare type SideMenu3OverridesProps = {
    SideMenu3?: PrimitiveOverrideProps<FlexProps>;
    SideMenuMainte?: SideMenuMainteProps;
    SideMenuReport?: SideMenuReportProps;
    SideMenuKuhaku?: SideMenuKuhakuProps;
} & EscapeHatchProps;
export declare type SideMenu3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenu3OverridesProps | undefined | null;
}>;
export default function SideMenu3(props: SideMenu3Props): React.ReactElement;
