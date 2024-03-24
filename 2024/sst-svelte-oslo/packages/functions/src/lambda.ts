import { ApiHandler } from "sst/node/api";
import { getHash } from "@sst-svelte-oslo/core/getHash";

export const handler = ApiHandler(async (_evt) => {
  // should work but doesn't
  const helloHash = await getHash();
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}. This is a hash ${helloHash}`,
  };
});
