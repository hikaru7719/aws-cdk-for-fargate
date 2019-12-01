#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { MyStack } from "../lib/stack";

const app = new cdk.App();
new MyStack(app, "MyStack");
