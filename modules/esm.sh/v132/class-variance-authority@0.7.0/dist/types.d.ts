import type * as CLSX from "https://esm.sh/v132/clsx@2.0.0/clsx.d.ts";
export type ClassPropKey = "class" | "className";
export type ClassValue = CLSX.ClassValue;
export type ClassProp = {
    class: ClassValue;
    className?: never;
} | {
    class?: never;
    className: ClassValue;
} | {
    class?: never;
    className?: never;
};
export type OmitUndefined<T> = T extends undefined ? never : T;
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;
