import * as fs from "fs";
import HMACSHA256 from "crypto-js/hmac-sha256";
import { enc } from "crypto-js";

const passwords: string[] = JSON.parse(fs.readFileSync("passwords", "utf-8"));

let jwt: string = fs.readFileSync("jwt", "utf-8");

jwt = jwt.replace(/-/g, "+").replace(/_/g, "/") + "=";

const originalHeaderAndPayload = jwt.split(".")[0] + "." + jwt.split(".")[1];

const originalSignature = jwt.split(".")[2];

for (let currentPassword of passwords) {
  console.log(currentPassword);
  const signature = HMACSHA256(originalHeaderAndPayload, currentPassword);
  if (enc.Base64.stringify(signature) === originalSignature) {
    console.log("---------found------------");
    break;
  }
}
