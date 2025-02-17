import { Options, PackageStuff } from "./packageStuff.types.js";

export const packageStuff = (<T extends Options>(options: T = "stuff" as T) => {
  return `Package ${options}`;
}) satisfies PackageStuff;
