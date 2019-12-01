import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle
} from "@aws-cdk/assert";
import cdk = require("@aws-cdk/core");
import stack = require("../lib/stack");

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const result = new stack.MyStack(app, "MyTestStack");
  // THEN
  expectCDK(result).to(
    matchTemplate(
      {
        Resources: {}
      },
      MatchStyle.EXACT
    )
  );
});
