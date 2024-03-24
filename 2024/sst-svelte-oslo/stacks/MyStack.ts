import { Architecture } from "aws-cdk-lib/aws-lambda";
import { StackContext, Api, SvelteKitSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, "site", {
    path: "packages/frontend/",
    // installs in lambda and works now
    // couldn't get arm64 to install
    nodejs: {
      install: [
        "oslo",
        "@node-rs/argon2",
        "@node-rs/argon2-linux-x64-gnu",
        // "@node-rs/argon2-linux-arm64-gnu",
        "@node-rs/bcrypt",
        "@node-rs/bcrypt-linux-x64-gnu",
        // "@node-rs/bcrypt-linux-arm64-gnu",
      ],
    },
    cdk: {
      server: {
        architecture: Architecture.X86_64,
      },
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
