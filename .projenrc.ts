import { awscdk } from 'projen';
import { ArrowParens, TrailingComma } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'user',
  authorAddress: 'user@domain.com',
  cdkVersion: '2.85.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'temporal-cluster-cdk-projen',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/user/temporal-cluster-cdk-projen.git',
  deps: ['lodash', 'nopt', 'ts-loader', 'wait-port', 'yaml', 'webpack', 'path', 'fs'],
  description: 'Construct for deploying temporal.io on AWS ECS.',
  devDeps: ['@types/aws-lambda', '@types/lodash', '@types/node', '@types/nopt'],
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.AVOID,
      bracketSameLine: true,
      bracketSpacing: true,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      printWidth: 150,
    },
    // packageName: undefined,  /* The "name" in package.json. */
  },
});
project.synth();
