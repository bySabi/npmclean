#!/usr/bin/env node
'use strict';

global.Promise = require('bluebird');

var Command = require('commander').Command;
var program = new Command('npmclean');

program.version(require('../package.json').version).parse(process.argv);

program.on('--version', function () {
  console.log(program.version);
});

var npmClean = require('..');
var cmdStatus = 0;
npmClean(process.cwd())
  .then(function () {
    console.log('clean done!');
  })
  .catch(function (error) {
    console.log(error.message);
    cmdStatus = 1;
  });

process.on('exit', function (status) {
  if (status === 1 || cmdStatus === 1) {
    process.exit(1);
  }
});
