# npmclean

[![npm version](https://badge.fury.io/js/npmclean.svg)](https://badge.fury.io/js/npmclean)
[![npm downloads](https://img.shields.io/npm/dm/npmclean.svg?style=flat-square)](https://www.npmjs.com/package/npmclean)
[![Windows Tests](https://img.shields.io/appveyor/ci/bySabi/npmclean/master.svg?label=Windows%20Tests)](https://ci.appveyor.com/project/bySabi/npmclean)
[![bitHound Overall Score](https://www.bithound.io/github/bySabi/npmclean/badges/score.svg)](https://www.bithound.io/github/bySabi/npmclean)

> In development flows some `npm 5` new features can be tiresome. With `npmclean` you could easily:
- remove `package-lock.json` only
- clean all modules, cache and `package-lock.json`

## Installation

### npm
```bash
$ npm install npmclean -g
```

## Shell usage
### Full clean & install all modules
```bash
$ cd my-module
$ npmclean && npm i
```

### Install new modules only
```bash
$ cd my-module
$ npmclean -l && npm i
```

## `package.json` useful run-scripts
```json
"scripts": {
  ...
  "npmi": "npmclean -i && npm i",
  "clean-install": "npmclean && npm i"
}
```

## CLI options
```bash
$ npmclean -h

  Usage: npmclean [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -l, --rm-lock  Remove only package-lock.json
    -s, --silent   Silent output console
```

## How full clean environment is performed

```bash
$ rm -rf node_modules
$ rm -rf package-lock.json*
$ npm cache clean --force
```

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
