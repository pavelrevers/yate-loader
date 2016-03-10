var loaderUtils = require('loader-utils');
var fs = require('fs');

var yate = require('yate');

module.exports = function() {
    this.cacheable();
    var file = loaderUtils.getRemainingRequest(this);
    var compiled = yate.compile(file).js;
    fs.writeFileSync(file.split('m-t-').join('t-') + '.min.js', compiled);
    return yate.compile(loaderUtils.getRemainingRequest(this)).js;
};
