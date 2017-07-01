'use strict';

global.Promise = require('bluebird');
var fs = require('fs-extra');
var path = require('path');
var exec = require('execa');
var glob = require('globby');

module.exports = function (cwd, opts) {
  var rmLock = !!opts.rmLock;
  return fs.pathExists(path.join(cwd, 'package.json')).then(function (result) {
    if (result) {
      if (rmLock) return rmPackageLocks(cwd);
      return Promise.all([
        fs.remove(path.join(cwd, 'node_modules')),
        rmPackageLocks(cwd),
        exec.shell('npm cache clean --force', { cwd: cwd })
      ]);
    } else {
      return Promise.reject(new Error('missing package.json'));
    }
  });
};

function rmPackageLocks (cwd) {
  return glob(path.join(cwd, 'package-lock.json' + '*')).map(function (
    fileName
  ) {
    return fs.remove(fileName);
  });
}
