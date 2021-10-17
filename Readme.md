# JWT Workshop

The goal of this workshop is to demonstrate the vulnerability of a weak JWT secret code.

First, run `npm run gen-passwords` to generate a file containing all possible passwords of 4 or less alphabetical characters. You can edit the `passwordGenerator.ts` file to add more characters or to generate longer passwords.

Pay attention to memory usage, the code is not optimised at all and will crash if the length of the passwords is too long.

Once the code is ran, a new file `passwords` is generated containing all the passwords.

Now you can edit the `jwtGenerator.ts` and change the payload and the code to generate a new `JWT`. In order for this workshop to work, you have to choose a code with the same letters as the characters in the passwordGenerator file and of the same length or smaller as the length value.

You can now run `npm run gen-jwt` to generate a new JWT token, copy the result in the console and paste it in the `crack.ts` file.

Now run `npm run crack` and you will see the algorithm trying all the passwords of the passwords file until it finds the original code used to generate the JWT.
