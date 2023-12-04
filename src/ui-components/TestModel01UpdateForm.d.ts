/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TestModel01 } from "../models";
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
export declare type TestModel01UpdateFormInputValues = {
    userName?: string;
    age?: number;
};
export declare type TestModel01UpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestModel01UpdateFormOverridesProps = {
    TestModel01UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestModel01UpdateFormProps = React.PropsWithChildren<{
    overrides?: TestModel01UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testModel01?: TestModel01;
    onSubmit?: (fields: TestModel01UpdateFormInputValues) => TestModel01UpdateFormInputValues;
    onSuccess?: (fields: TestModel01UpdateFormInputValues) => void;
    onError?: (fields: TestModel01UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestModel01UpdateFormInputValues) => TestModel01UpdateFormInputValues;
    onValidate?: TestModel01UpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestModel01UpdateForm(props: TestModel01UpdateFormProps): React.ReactElement;
