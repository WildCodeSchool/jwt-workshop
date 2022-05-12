import * as fs from "fs";
import HMACSHA256 from "crypto-js/hmac-sha256";
import { enc } from "crypto-js";

const candidateKeys: string[] = JSON.parse(
  fs.readFileSync("candidateKeys", "utf-8")
);

let jwt: string = fs.readFileSync("jwt", "utf-8");

jwt = jwt.replace(/-/g, "+").replace(/_/g, "/") + "=";

const originalHeaderAndPayload = jwt.split(".")[0] + "." + jwt.split(".")[1];

const originalSignature = jwt.split(".")[2];

for (let key of candidateKeys) {
  console.log(key);
  const signature = HMACSHA256(originalHeaderAndPayload, key);
  if (enc.Base64.stringify(signature) === originalSignature) {
    console.log("---------found------------");
    break;
  }
}
