# JSTransformer DataUri


Converts file into [DataURI](https://en.wikipedia.org/wiki/Data_URI_scheme) representation;

# jstransformer-datauri

[DataURI](https://www.npmjs.com/package/datauri) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/slavaGanzin/jstransformer-datauri/master.svg)](https://travis-ci.org/slavaGanzin/jstransformer-datauri)
<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/slavaGanzin/jstransformer-datauri/master.svg)](https://codecov.io/gh/slavaGanzin/jstransformer-datauri) -->
<!-- [![Dependency Status](https://img.shields.io/david/slavaGanzin/jstransformer-datauri/master.svg)](http://david-dm.org/slavaGanzin/jstransformer-datauri)
[![Greenkeeper badge](https://badges.greenkeeper.io/slavaGanzin/jstransformer-datauri.svg)](https://greenkeeper.io/) -->
[![NPM version](https://img.shields.io/npm/v/jstransformer-datauri.svg)](https://www.npmjs.org/package/jstransformer-datauri)

## Installation

    npm install jstransformer-datauri

## API

```js
var datauri = require('jstransformer')(require('jstransformer-datauri'))

datauri.render('./Octocat.png').body.slice(0, 100)
//=> data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAKZCAYAAABAwk9hAAB/FUlEQVR4AezBMQEAAAjAIJvM/imt4Q
```

## Optional resize
```js
var datauri = require('jstransformer')(require('jstransformer-datauri'))

datauri.render('./Octocat.png:10x10').body
//=> data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQI12NQU5DjUDUw5dIzMAxf2ttwYOfMjr97Znf9WdBZc0pBQd6cjZWbUUNVlRMAH8sNpOmtCWUAAAAASUVORK5CYII=
```

## License

MIT
