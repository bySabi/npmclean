#!/usr/bin/env node
'use strict';
global.Promise = require('bluebird');
var getLogger = require('loglevel-colored-level-prefix');
var Command = require('safe-commander').Command;
var program = new Command('npmclean');
var npmClean = require('..');
var cmdStatus = 0;

program
  .version(require('../package.json').version)
  .option('-l, --rm-lock', 'Remove only package-lock.json')
  .option('-s, --silent', 'Silent output console')
  .parse(process.argv);

program.on('--version', function () {
  console.log(program.version);
});

var level = program.optsObj.silent ? undefined : 'trace';
var logger = getLogger({ prefix: 'npmclean', level: level });

var opts = { rmLock: program.optsObj.rmLock };

npmClean(process.cwd(), opts)
  .then(function () {
    logger.info('clean done!');
  })
  .catch(function (error) {
    logger.warn(error.message);
  });

process.on('exit', function (status) {
  if (status === 1 || cmdStatus === 1) {
    process.exit(1);
  }
});
