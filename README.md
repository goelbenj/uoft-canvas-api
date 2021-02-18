[![npm version](https://badge.fury.io/js/node-canvas-api.svg)](https://badge.fury.io/js/node-canvas-api)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Canvas LMS API for Node.js
Canvas API functions bundled as a NPM package for Node.js.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains.

### Prerequisites

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**.

### Installation

To use with node:
```bash
$ npm install node-canvas-api
```
Then, in wherever you want to use this package:
```js
const canvasAPI = require('node-canvas-api')
```

Rename the `sample.env` file to `.env` and add your institution's domain and API access token.

Attached to the `canvasAPI` are a [bunch of functions](https://github.com/ubccapico/node-canvas-api/tree/master/src).
Run the attached functions!

### Example Usage

#### Get information about self:
```js
const canvasAPI = require('node-canvas-api')

canvasAPI.getSelf()
  .then(self => console.log(self))
```

#### Get students in a course:
```js
const { getUsersInCourse, getOptions } = require('node-canvas-api')

getUsersInCourse(12345, getOptions.users.enrollmentType.student) // first argument is Canvas course ID
  .then(students => console.log(students))
```

## Contribute
Contributions are welcome and greatly appreciated!

### How to contribute
1. Create an [issue](https://github.com/ubccapico/node-canvas-api/issues) describing what contribution you are planning to make.
1. Fork the repo.
1. Add your contributions to the [`source` directory](https://github.com/ubccapico/node-canvas-api/tree/master/source) (and not the `src` directory. This directory is generated by [Rollup](https://rollupjs.org/guide/en/) during the build phase, and is what gets published to [npm](https://www.npmjs.com/package/node-canvas-api).)
1. If you add a file to `source`, please add the file to the existing [`index.js` inside `source`](https://github.com/ubccapico/node-canvas-api/blob/master/source/index.js), so that during the build your contribution will be included in `src`.
1. Test your code by creating a file in the root of the project directory, importing your code addition from `src`, and running it.
1. Once you're happy with your contribution, open an [pull request](https://github.com/ubccapico/node-canvas-api/pulls) and I'll take a look.

### Hypothetical scenario for adding new feature
1.	Add new file to `source` folder (say that the new file you want to add is `getUsersWithGradeThreshold.js`)
2.	 In the `source` folder, there’s an `index.js` file that lists all of the files you want exported to `src`. There you will add: `export { default as getUsersWithGradeThreshold } from './getUsersWithGradeThreshold'`
3.	Run `npm run build`, which will build the project and output your new function into `src`. 
4.	In the `index.js` at the root of the project that you create (this is not the `index.js` that’s in the `source` folder), import your new file from `src` like this: `const getUsersWithGradeThreshold = require('.src/getUsersWithGradeThreshold')` and test by running the code: `node index.js`.
5.	Once you’re happy that it works, create a PR.

## Usage
* [Canvas Rubrics](https://github.com/ubccapico/canvas-rubric)
* [Canvas Discussions](https://github.com/ubccapico/canvas-discussion)
* [Canvas Syllabus](https://github.com/UBC-LFS/lfs-canvas-syllabus)

## Authors

* [justin0022](https://github.com/justin0022) -
**Justin Lee** &lt;justin.lee@ubc.ca&gt;

## License

This project is licensed under the MIT License.
