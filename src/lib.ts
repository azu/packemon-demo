require("type-is")
export const libEcho = <T extends unknown[]>(...args: T): T => {
    return args;
}
