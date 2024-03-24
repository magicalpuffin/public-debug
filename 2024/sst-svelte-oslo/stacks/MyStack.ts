import { StackContext, Api, SvelteKitSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, "site", {
    path: "packages/frontend/",
    nodejs: { install: ["oslo"] },
  });
  const api = new Api(stack, "api", {
    // installs in lambda and resolves bundling issue but doesn't work
    defaults: { function: { nodejs: { install: ["oslo"] } } },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    SiteURL: site.url,
    ApiEndpoint: api.url,
  });
}
