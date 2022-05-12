# JWT Workshop

The goal of this workshop is to demonstrate the vulnerability of a weak JWT secret key.

First, run `npm run gen-candidate-keys` to generate a file containing all possible secret keys of 4 or less alphabetical characters. You can edit the `candidateKeysGenerator.ts` file to add more characters or to generate longer keys.

Pay attention to memory usage, the code is not optimised at all and will crash if the length of the keys is too long.

Once the code is ran, a new file `candidateKeys` is generated containing all the keys.

Now you can edit the `jwtGenerator.ts` and change the payload and the code to generate a new `JWT`. In order for this workshop to work, you have to choose a code with the same letters as the characters in the candidateKeysGenerator file and of the same length or smaller as the length value.

You can now run `npm run gen-jwt` to generate a new JWT token, copy the result in the console and paste it in the `crack.ts` file.

Now run `npm run crack` and you will see the algorithm trying all the keys of the candidate keys file until it finds the original code used to generate the JWT.
