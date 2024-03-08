import { StackContext, Api, SvelteKitSite, Config } from "sst/constructs";

export function API({ stack }: StackContext) {
  const MY_CONFIG = new Config.Parameter(stack, "MY_CONFIG", {
    value: "myconfigvalue",
  });

  stack.setDefaultFunctionProps({ bind: [MY_CONFIG] });
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  const site = new SvelteKitSite(stack, "site", {
    bind: [MY_CONFIG, api],
    path: "packages/frontend/",
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url,
  });
}
