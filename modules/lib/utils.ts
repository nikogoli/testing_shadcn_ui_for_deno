// @deno-types="https://esm.sh/v132/clsx@2.0.0/clsx.d.ts"
import { ClassValue, clsx } from "../esm.sh/clsx@2.0.0.js"
import { twMerge } from "../esm.sh/tailwind-merge@1.14.0.js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}