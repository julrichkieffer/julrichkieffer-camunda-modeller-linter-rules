# BPMN Linter Rules Plugin - Julrich Kieffer

[![Compatible with Camunda Modeler version 3.3](https://img.shields.io/badge/Camunda%20Modeler-3.3+-blue.svg)](https://github.com/camunda/camunda-modeler)

This plug-in provides custom BPMN Linter rules to the [Camunda Modeler Linter Plug-in](https://github.com/bpmn-io/camunda-modeler-linter-plugin).

## Configuring Rules

Use the local [`.bpmnlintrc` file](.bpmnlintrc) to configure active lint rules.

Checkout the [bpmnlint documentation](https://github.com/bpmn-io/bpmnlint#configuration) for more information regarding this file.

## Creating Rules

This project ships with a [bpmnlint extension](./bpmnlint-plugin-julrichkieffer) with the `julrichkieffer` namespace.

Add or edit rules in the [extension's `rules` directory](./bpmnlint-plugin-julrichkieffer/rules).

In order to use the rules (or provided configurations), activate them via the local [`.bpmnlintrc` file](.bpmnlintrc), prefixed with the `julrichkieffer` namespace:

 ```json
{
  "extends": [
     "bpmnlint:recommended",
     "plugin:julrichkieffer/recommended"
  ],
  "rules": {
    "julrichkieffer/no-manual-task": "warn",
    "julrichkieffer/your-other-rule": "error",
    "julrichkieffer/another-rule": "off"
  }
}
```

## Plug-in Discovery

The `julrichkieffer` namespace used by the shipped [bpmnlint extension](./bpmnlint-plugin-julrichkieffer) is arbitrary, i.e. can be changed freely. However you'd need to take into account how the linting infrastructure discovers rules and configuration:

* Given a namespace `{FOO}`, it searches for a library `bpmnlint-plugin-{FOO}` in the NodeJS search path (usually `node_modules` folder). Therefore, if you change the namespace, don't forget to run `npm install`
* It searches the `rules` folder for a file matching an activated rule name
* It searches the `config` folder for a file matching a configured configuration or inspect the plug-ins default export

In the case of our this plug-in `julrichkieffer/recommended` reference the `julrichkieffer` configuration, exported by this [plug-in's entry point](/bpmnlint-plugin-julrichkieffer/index.js). The rule `julrichkieffer/no-manual-task`, on the other hand, references [plug-in's rule](/bpmnlint-plugin-julrichkieffer/rules/no-manual-task.js).

## Bundling

Setup the project:

```sh
npm install
```

Build the plug-in:

```sh
npm run all
```

Continuously rebuild in development mode:

```sh
npm run dev
```

## Before you Publish

* [ ] Clearly state which Camunda Modeler version your plug-in is compatible with
* [ ] Give your plug-in a [unique Plugin menu entry (name)](./index.js)

## Additional Resources

* [Linter Plug-in](https://github.com/camunda/camunda-modeler-linter-plugin)
* [bpmnlint](https://github.com/bpmn-io/bpmnlint)

## Licence

MIT
