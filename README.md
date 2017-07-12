# JavaScript practice
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/MikeSaprykin/js-stack)
[![Build Status](https://travis-ci.org/MikeSaprykin/js-practice.svg?branch=master)](https://travis-ci.org/MikeSaprykin/js-practice)
[![codecov](https://codecov.io/gh/MikeSaprykin/js-practice/branch/master/graph/badge.svg)](https://codecov.io/gh/MikeSaprykin/js-practice)
> A JavaScript practices project, filled with various algorithms and tasks from different study resources:
> Some bigger test and training projects will be linked to the landing page of this project
* [FreeCodeCamp](https://www.freecodecamp.org/)
* [CodeWars](https://www.codewars.com)
* and other playground stuff.

## Technologies
* [JavaScript](https://www.javascript.com) - A primary language
* [ES6/ES7](http://es6-features.org) - Everything is written using features of latest JS standarts
* [Babel](https://babeljs.io) - Used for compiling new features down to older versions of JS
* [WebPack](https://webpack.js.org) - A primary module bundler
* [Karma](https://karma-runner.github.io/1.0/index.html) - A primary JS test runner
* [Jasmine](https://jasmine.github.io) - A primary JS testing library
* [Istanbul](https://istanbul.js.org) - Code coverage reporter
* [Travis-ci](https://travis-ci.org) - Continuous integration tool
* [Lodash](https://lodash.com) - A helper library with a lot of utility functions. 
* [Codecov](https://codecov.io) - A tool for gathering and generating code coverage reports

## Well tested
In this project I am trying to follow [TDD](https://en.wikipedia.org/wiki/Test-driven_development) style,
so every file with functions having it's own testing file.
Generated code coverage reports and badges with Codecov.
Travis basic integration added, to run the tests, when pushed to master.

> Also I am trying to implement some kind of both imperative and declarative styles
 in my tasks. So there are often two implementations of the same task.
 But declarative are a little bit not fair, as sometimes they are using some 
 utility functions from lodash library. Maybe will use Ramda at some point, because I'm a fan
 of functional programming =D
 
## Project structure
Current folder structure looking: (version: 0.0.2)
```
.
├── .babelrc                                        # Babel configuration file
├── .travis.yml                                     # Travis-CI configuration file
├── README.md                                       # Project README
├── config                                          # Webpack configuration files
├── coverage                                        # Folder with generated code coverage   
├── karma.conf.js                                   # Index Karma config file
├── package.json                                    # Project package.json
├── src                                             # Project source files folder
│   └── free_code_camp                              # FreeCodeCamp tasks folder
│       └── basic-algorithm-scripting               # Basic algorithm scripting tasks
│           ├── factorialize                        # Factorialize functions and tests
│           └── reverse-string                      # Reverse string functions and tests
|           └── palindrome                          # Palindrome task and tests
└── webpack.config.js                               # Webpack config file
```
 
## Scripts
No fancy scripts yet. Just clone the repo and run
```bash
   # For single run of the tests
   npm test 
   
   # For a tdd style
   npm run tdd
```
 
## TODO's
* [ ] Add a landing page for the project
* [ ] Finish webpack.config for deployment
* [ ] Add builds to travis.ci
* [ ] Deploy landing page to github.pages
* [ ] Add execution time metrics
* [ ] Finish the transfer of freecodecamp tasks
* [ ] Finish the transfer of CodeWars tasks
* [ ] Move to typescript (? optional)
* [ ] Get some Ramda up and running (? optional)
