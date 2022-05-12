import * as fs from "fs";

const characters = [
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

const multiPass = (characters: string[], length: number) => {
  let currentResult = characters.concat();
  const globalResult = [];
  globalResult.push(currentResult);
  for (let i = 1; i < length; i++) {
    currentResult = currentResult
      .map((el) => characters.map((el2) => el + el2))
      .flat(2)
      .sort();
    globalResult.push(currentResult);
  }
  return globalResult.flat(2);
};

try {
  fs.writeFileSync("candidateKeys", JSON.stringify(multiPass(characters, 4)));
} catch (err) {
  console.error(err);
}
