export type Options = "stuff" | (string & {});

export type PackageStuff = <T extends Options>(options?: T) => `Package ${T}`;
