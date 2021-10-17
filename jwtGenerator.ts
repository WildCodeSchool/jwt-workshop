import jwt from "jsonwebtoken";

console.log(jwt.sign({ role: "student" }, "code"));
