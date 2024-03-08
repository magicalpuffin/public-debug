import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-svelte-bind",
      // region: "us-east-1",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
