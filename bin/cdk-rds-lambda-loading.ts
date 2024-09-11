#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkRdsLambdaLoadingStack } from '../lib/cdk-rds-lambda-loading-stack';

const app = new cdk.App();
new CdkRdsLambdaLoadingStack(app, 'rdslambdaloading', {
  description: 'RDS with Lambda to initial load the tables',
  env: {
    region: 'process.env.CDK_DEFAULT_REGION',
    account: 'process.env.CDK_DEFAULT_ACCOUNT'
  }
});
