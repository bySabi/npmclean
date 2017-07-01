# npmclean

[![npm version](https://badge.fury.io/js/npmclean.svg)](https://badge.fury.io/js/npmclean)
[![npm downloads](https://img.shields.io/npm/dm/npmclean.svg?style=flat-square)](https://www.npmjs.com/package/npmclean)
[![Windows Tests](https://img.shields.io/appveyor/ci/bySabi/npmclean/master.svg?label=Windows%20Tests)](https://ci.appveyor.com/project/bySabi/npmclean)
[![bitHound Overall Score](https://www.bithound.io/github/bySabi/npmclean/badges/score.svg)](https://www.bithound.io/github/bySabi/npmclean)

> Sometimes, in development stage, a clean module environment is needed.
> This tool perform:

```bash
rm -rf node_modules
rm -rf package-lock.json*
npm cache clean --force
```

## Installation

### npm
```bash
npm install npmclean -g
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

## Shell usage
Clean & install module
```bash
cd my-module
npmclean && npm i
```
## `package.json` usage
```json
"scripts": {
  ...
  "clean-install": "npmclean && npm install"
}
```

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
