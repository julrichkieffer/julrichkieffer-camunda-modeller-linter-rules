const { is } = require("bpmnlint-utils");

/**
 * Rule that reports when manual tasks are used
 */
module.exports = function () {
  function check(node, reporter) {
    if (is(node, "bpmn:ManualTask"))
      reporter.report(node.id, "Element has disallowed type bpmn:ManualTask");
  }

  return {
    check,
  };
};
