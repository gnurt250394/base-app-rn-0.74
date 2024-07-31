#! /usr/bin/env node

const {setupEnv} = require('./common');

(() => {
  const {argv} = process;

  const [, , envPath] = argv;

  setupEnv(envPath);
})();
