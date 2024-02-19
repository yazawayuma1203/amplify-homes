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
export declare type TestModel01CreateFormInputValues = {
    userName?: string;
    age?: number;
};
export declare type TestModel01CreateFormValidationValues = {
    userName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestModel01CreateFormOverridesProps = {
    TestModel01CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestModel01CreateFormProps = React.PropsWithChildren<{
    overrides?: TestModel01CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestModel01CreateFormInputValues) => TestModel01CreateFormInputValues;
    onSuccess?: (fields: TestModel01CreateFormInputValues) => void;
    onError?: (fields: TestModel01CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestModel01CreateFormInputValues) => TestModel01CreateFormInputValues;
    onValidate?: TestModel01CreateFormValidationValues;
} & React.CSSProperties>;
export default function TestModel01CreateForm(props: TestModel01CreateFormProps): React.ReactElement;
