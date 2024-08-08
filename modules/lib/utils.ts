import { ClassValue, clsx } from "../../modules/esm.sh/clsx@2.0.0.js"
import { twMerge } from "../modules/../esm.sh/tailwind-merge@1.14.0.js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}