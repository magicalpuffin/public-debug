import type { PageLoad } from "./$types";
import { Argon2id } from "oslo/password";

export const load = (async ({ fetch }) => {
  // should work on server but doesn't
  const hashHello = await new Argon2id().hash("helloworld");
  return { hashHello };
}) satisfies PageLoad;
