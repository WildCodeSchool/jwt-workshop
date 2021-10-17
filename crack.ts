import * as fs from "fs";
import HMACSHA256 from "crypto-js/hmac-sha256";
import { enc } from "crypto-js";

const passwords: string[] = JSON.parse(fs.readFileSync("passwords", "utf-8"));

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYzNDQ2OTc0M30.FrdBW4AiF0-hh4BFP-4f7gyWkjbEHxlXnfVXrygIsVY"
    .replaceAll("-", "+")
    .replaceAll("_", "/") + "=";

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
