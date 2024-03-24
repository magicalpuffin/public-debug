import { StackContext, Api, SvelteKitSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, "site", {
    path: "packages/frontend/",
    // this still doesn't work even though files are in lambda
    nodejs: {
      install: [
        "oslo",
        "@node-rs/argon2",
        "@node-rs/argon2-linux-x64-gnu",
        "@node-rs/bcrypt",
        "@node-rs/bcrypt-linux-x64-gnu",
      ],
    },
  });
  const api = new Api(stack, "api", {
    // installs in lambda and works now
    defaults: {
      function: {
        nodejs: {
          install: [
            "oslo",
            "@node-rs/argon2",
            "@node-rs/argon2-linux-x64-gnu",
            "@node-rs/bcrypt",
            "@node-rs/bcrypt-linux-x64-gnu",
          ],
        },
      },
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    SiteURL: site.url,
    ApiEndpoint: api.url,
  });
}
