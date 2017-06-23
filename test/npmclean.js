'use strict';

global.Promise = require('bluebird');
var fs = require('fs-extra');
var path = require('path');
var glob = require('globby');
var tmp = require('tmp-promise');
var npmClean = require('..');

function setup () {
  return tmp // create temp folder
    .dir()
    .then(function (o) {
      return Promise.resolve(o.path);
    })
    .then(function (fixture) {
      return Promise.all([
        fixture,
        fs.copy(
          path.join(__dirname, 'package.json.fixture'),
          path.join(fixture, 'package.json')
        ),
        fs.ensureDir(path.join(fixture, 'node_modules')),
        fs.ensureFile(path.join(fixture, 'package-lock.json')),
        fs.ensureFile(path.join(fixture, 'package-lock.json-any'))
      ]);
    })
    .catch(function (error) {
      console.log(error);
    });
}

/* eslint-env jest */
describe('clean module before install', function () {
  it('setup fixture', function () {
    expect.assertions(1);
    return setup().spread(function (fixture) {
      return glob(fixture + '/*').then(function (result) {
        expect(result.length).toEqual(4);
      });
    });
  });

  it('npmclean', function () {
    expect.assertions(2);
    return setup().spread(function (fixture) {
      return npmClean(fixture).then(function () {
        return glob(fixture + '/*').then(function (result) {
          expect(result.length).toEqual(1);
          return fs
            .pathExists(path.join(fixture, 'package.json'))
            .then(function (exists) {
              expect(exists).toBeTruthy();
            });
        });
      });
    });
  });
});
