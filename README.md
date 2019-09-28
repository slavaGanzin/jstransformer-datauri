# JSTransformer DataUri


Use JSTransformer Boilerplate to create and update transformers.

# jstransformer-datauri

[DataURI](https://www.npmjs.com/package/datauri) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/slavaGanzin/jstransformer-datauri/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/slavaGanzin/jstransformer-datauri/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/slavaGanzin/jstransformer-datauri/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![Greenkeeper badge](https://badges.greenkeeper.io/slavaGanzin/jstransformer-datauri.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-datauri

## API

```js
var datauri = require('jstransformer')(require('jstransformer-datauri'))

datauri.render('./Octocat.png').body.slice(0, 100)
//=> data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAKZCAYAAABAwk9hAAB/FUlEQVR4AezBMQEAAAjAIJvM/imt4Q...
```

## License

MIT
