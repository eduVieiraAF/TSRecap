
type stringOrNumberOrNever = string | number | never;

let data: string | number | never;
let data2: stringOrNumberOrNever;

data = "hello";
data = 1;

data2 = "hello";
data2 = 4;

