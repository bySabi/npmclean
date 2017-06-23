#!/usr/bin/env node
'use strict';

global.Promise = require('bluebird');

var Command = require('commander').Command;
var program = new Command('npmclean');

program.version(require('../package.json').version).parse(process.argv);

program.on('--version', function () {
  console.log(program.version);
});

// default
var npmClean = require('..');
var cwd = process.cwd();

npmClean(cwd)
  .then(function () {
    console.log('clean done!');
  })
  .catch(function (error) {
    console.log(error.message);
  });

process.on('exit', function (status) {
  if (status === 1) {
    process.exit(1);
  }
});
