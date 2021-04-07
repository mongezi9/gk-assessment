const xpathSelector = function (selector) {
    return {
      selector,
      locateStrategy: 'xpath',
      supressNotFoundErrors: true,
    };
  };
  const idSelector = function (selector) {
    return {
      selector,
      locateStrategy: 'id',
      supressNotFoundErrors: true,
    };
  };
  const iosClassChainSelector = function (selector) {
    return {
      selector,
      locateStrategy: '-ios class chain',
      supressNotFoundErrors: true,
    };
  };
  const accessibilityIdSelector = function (selector) {
    return {
      selector,
      locateStrategy: 'accessibility id',
      supressNotFoundErrors: true,
    };
  };
  const iosPredicateStringSelector = function (selector) {
    return {
      selector,
      locateStrategy: '-ios predicate string',
      supressNotFoundErrors: true,
    };
  };
  const xpathAtIndexSelector = function (selector, i) {
    return {
      selector,
      locateStrategy: 'xpath',
      index: i,
      supressNotFoundErrors: true,
    };
  };
  module.exports = {
    xpathSelector,
    idSelector,
    iosClassChainSelector,
    accessibilityIdSelector,
    xpathAtIndexSelector,
    iosPredicateStringSelector,
  };
  