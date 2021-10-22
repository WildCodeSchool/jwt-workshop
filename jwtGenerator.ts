import jwt from "jsonwebtoken";
import * as fs from "fs";

try {
  fs.writeFileSync("jwt", jwt.sign({ role: "student" }, "code"));
} catch (err) {
  console.error(err);
}
