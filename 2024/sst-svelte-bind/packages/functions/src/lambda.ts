import { ApiHandler } from "sst/node/api";
import { Config } from "sst/node/config";

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}. Config value: ${Config.MY_CONFIG}`,
  };
});
