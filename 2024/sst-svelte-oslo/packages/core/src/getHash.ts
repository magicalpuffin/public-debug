import { Argon2id } from "oslo/password";

export async function getHash() {
  const helloHash = await new Argon2id().hash("helloworld");
  return helloHash;
}
