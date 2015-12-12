var loaderUtils = require('loader-utils');

var yate = require('yate');

module.exports = function() {
    this.cacheable();
    return yate.compile(loaderUtils.getRemainingRequest(this)).js;
};
