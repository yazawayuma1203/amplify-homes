/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestForm01InputValues = {
    userName?: string;
    age?: number;
};
export declare type TestForm01ValidationValues = {
    userName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestForm01OverridesProps = {
    TestForm01Grid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestForm01Props = React.PropsWithChildren<{
    overrides?: TestForm01OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestForm01InputValues) => TestForm01InputValues;
    onSuccess?: (fields: TestForm01InputValues) => void;
    onError?: (fields: TestForm01InputValues, errorMessage: string) => void;
    onChange?: (fields: TestForm01InputValues) => TestForm01InputValues;
    onValidate?: TestForm01ValidationValues;
} & React.CSSProperties>;
export default function TestForm01(props: TestForm01Props): React.ReactElement;
