import * as fs from "fs";
import HMACSHA256 from "crypto-js/hmac-sha256";
import { enc } from "crypto-js";

let jwt: string = fs.readFileSync("jwt", "utf-8");

jwt = jwt.replace(/-/g, "+").replace(/_/g, "/") + "=";

const originalHeaderAndPayload = jwt.split(".")[0] + "." + jwt.split(".")[1];

const originalSignature = jwt.split(".")[2];

function to_base(base: number, num: number) {
  const largest_power = ~~(Math.log(num) / Math.log(base));
  const result = [];
  for (let pow = largest_power; pow >= 0; pow--) {
    const digit = ~~(num / base ** pow);
    num -= digit * base ** pow;
    result.push(digit);
  }
  return result;
}

const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const maxLength = 6;
let currentLength = 1;
let found = false;

for (let i = 0; i < Math.pow(chars.length, maxLength); i++) {
  if (i === Math.pow(chars.length, currentLength)) {
    currentLength++;
    i = 0;
  }
  let tempPass = to_base(chars.length, i).map((el) => chars[el]);
  while (tempPass.length < currentLength) {
    tempPass = [chars[0], ...tempPass];
  }
  const pass = tempPass.join("");
  console.log(pass);
  const signature = HMACSHA256(originalHeaderAndPayload, pass);
  if (enc.Base64.stringify(signature) === originalSignature) {
    console.log("---------found------------");
    break;
  }
}
